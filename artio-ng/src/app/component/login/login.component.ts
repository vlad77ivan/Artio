import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
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


    public lastname: string = '';
    public firstname: string = '';
    public description: string = '';
    public imageSrc: string = '';

    constructor(private utilsService: UtilsService) {
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
        console.log(this.username + this.password)
    }

    signUpToggle() {
        this.loginMode = false;
    }

    signUp() {
        console.log(this.username);
        console.log(this.password);
        console.log(this.lastname);
        console.log(this.firstname);
        console.log(this.description);
        console.log(this.imageSrc);
    }
}
