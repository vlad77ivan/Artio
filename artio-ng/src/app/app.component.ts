import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public exploreView = true;
  public profileView = false;

  constructor() {
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
}
