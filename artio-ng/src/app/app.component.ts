import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from './service/user.service';
import { User } from './model/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public loggedUsername: string = '';
  public exploreView = true;
  public profileView = false;
  public loggedIn = false;
  public loggedUser: User = {} as User;

  constructor(private usersService: UsersService) {
    
  }

  ngOnInit() {
  }

  changeTab(view: string) {
    this.exploreView = false;
    this.profileView = false;

    if (view === 'explore') {
      this.exploreView = true;
    } else if (view === 'profile') {
      this.profileView = true;
    }
  }

  logEvent(username: string) {
    this.loggedIn = true;
    this.loggedUsername = username;

    this.usersService.getUser(this.loggedUsername).subscribe(user => {
      this.loggedUser = user as User;
    })
  }
}
