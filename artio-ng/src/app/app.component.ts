import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public exploreView = true;
  public profileView = false;
  public businessView = false;

  constructor() {
  }

  ngOnInit() {
  }

  changeTab(view: string) {
    this.exploreView = false;
    this.businessView = false;
    this.profileView = false;

    if (view === 'explore') {
      this.exploreView = true;
    } else if (view === 'profile') {
      this.profileView = true;
    } else {
      this.businessView = true;
    }

  }
}
