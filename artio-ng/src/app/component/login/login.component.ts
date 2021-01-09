import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/service/user.service';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public username: string = '';
    public password: string = '';
    public loginMode = true;

    @Output() logEmitter = new EventEmitter<string>();

    public lastname: string = '';
    public firstname: string = '';
    public description: string = '';
    public imageSrc: string = '';

    constructor(
        private utilsService: UtilsService,
        private usersService: UsersService
    ) {
    }

    ngOnInit() {
    }

    handleInputChange(e: any) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
          alert('invalid format');
          return;
        }
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
      }

    _handleReaderLoaded(e: any) {
        let reader = e.target;
        this.imageSrc = reader.result;
        console.log(this.imageSrc)
    }

    login() {
        this.usersService.logIn(this.username, this.password).subscribe((response) => {
            if (response) {
                this.logEmitter.emit(this.username);
            }
        })
    }

    signUpToggle() {
        this.loginMode = false;
    }

    signUp() {
        this.usersService.signUp({
            username: this.username,
            password: this.password,
            first_name: this.firstname,
            last_name: this.lastname,
            profile_picture: this.imageSrc,
            description: this.description
        }).subscribe((response) => {
                console.log(response);
                this.logEmitter.emit(this.username);
        });
    }

    checkFields(): boolean {
        return this.lastname === '' || this.firstname === '' 
            || this.username === '' || this.password === ''
            || this.description === '';
    }
}
