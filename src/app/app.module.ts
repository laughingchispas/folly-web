import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';


// Imports for loading & configuring the in-memory web api
/*
 import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
 import { InMemoryDataService }  from './in-memory-data.service';
 */

import {AppComponent} from './app.component';
import {ContentService} from './service';
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
	{path: 'calendar', component: CalendarComponent},
	{path: 'about', component: AboutComponent},
	{path: 'contact', component: SiteContactComponent},
	{path: 'media', component: MediaComponent},
	{path: '', component: HomeComponent},
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
		/*InMemoryWebApiModule.forRoot(InMemoryDataService),*/
		RouterModule.forRoot(appRoutes)
	],
	// Notice I added your ContentService to the PROVIDERS array. This is important: it's injectable, which
	// means that it is a provider. This makes it available to all components in their constructors!
	// As a rule:
	// Services === Injectable
	// Injectable === provider
	// Service === provider
	providers: [
		ContentService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
