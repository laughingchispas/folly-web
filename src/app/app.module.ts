import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

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
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
