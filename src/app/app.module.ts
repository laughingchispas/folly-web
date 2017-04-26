import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';/*
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';*/

import { AppComponent } from './app.component';
import {
  AboutComponent,
  CalendarComponent,
  HomeComponent,
  MediaComponent,
  PhotoBoxComponent,
  NavigationComponent,
  SiteContactComponent,
  SiteFooterComponent,
  TopBannerComponent,
  VideoComponent
} from './component/';

const appRoutes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: SiteContactComponent },
  { path: 'media', component: MediaComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    CalendarComponent,
    HomeComponent,
    NavigationComponent,
    MediaComponent,
    PhotoBoxComponent,
    SiteContactComponent,
    SiteFooterComponent,
    TopBannerComponent,
    VideoComponent,
  ],
  imports: [
    BrowserModule,
/*
    BrowserAnimationsModule,
*/
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
