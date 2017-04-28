import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import {ContentService} from "../../service";
/*
 import {
 trigger,
 state,
 style,
 animate,
 transition
 } from '@angular/animations';
 */


@Component({
	selector: 'home',
	templateUrl: './home.cmp.html',
	styleUrls: ['./home.cmp.css'],
	/* animations: [
	 trigger('heroState', [
	 state('inactive', style({
	 backgroundColor: '#eee',
	 transform: 'scale(1)'
	 })),
	 state('active',   style({
	 backgroundColor: '#cfd8dc',
	 transform: 'scale(1.1)'
	 })),
	 transition('inactive => active', animate('100ms ease-in')),
	 transition('active => inactive', animate('100ms ease-out'))
	 ])
	 ]*/
})
export class HomeComponent implements OnDestroy {
	content: any = {};

	private contentSvcSub: Subscription;

	constructor(contentService: ContentService) {
		// In any component where you want to use the ContentService's data, simply subscribe to
		// it's BehaviorSubject and you'll automatically get the data, either now if it's already available
		// or later once it comes in.
		contentService.dataSubject.subscribe(this.handleData.bind(this));
	}

	// This is the data handler that fires whenever the BehaviorSubject udpates. Since this updates the public
	// 'content' property above, the data transfers directly to the dom as soon as it comes in, and boom,
	// you're in business.
	private handleData(data: any) {
		this.content = data;
	}

	// Remember that we talked about how subscriptions will hang around even after their component is
	// destroyed. You need to unsubscribe to effectively destroy the subscription so you don't experience
	// memory leaks. However, you want to keep it subscribed the entire time the component is alive. That's
	// why using the Angular-provided ngOnDestroy is convenient, this method will get called automatically
	// by the framework whenever this component goes away.
	ngOnDestroy() {
		this.contentSvcSub.unsubscribe();
	}
}

