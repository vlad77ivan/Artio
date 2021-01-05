import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list'
import { PersonalPage } from './component/personal-page/personal-page.component';
@NgModule({
  declarations: [
    AppComponent,
    PersonalPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
