import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list'
import { PersonalPage } from './component/personal-page/personal-page.component';
import { PostComponent } from './component/post/post.component';
import { ExplorePageComponent } from './component/explore-page/explore-page.component';
import { BusinessPageComponent } from './component/business-page/business-page.component';
import { ReviewComponent } from './component/review/review.component';
import { UtilsService } from './service/utils.service';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    PersonalPage,
    PostComponent,
    ExplorePageComponent,
    BusinessPageComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
