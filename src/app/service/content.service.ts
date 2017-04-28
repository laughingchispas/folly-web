// To make a service, you need to tell Angular that it's a special type of class.
// This special type of class needs to be "injectable" into your components. So, we need to import
// the "Injectable" decorator so we can flag this class as an injectable service.
import { Injectable } from '@angular/core';

// We need the Http class to be able to perform get requests, and the Response type so we can tell our
// data handler what type of object to expect
import { Http, Response } from '@angular/http';

// We already went over subscriptions; basically, import the type here so we can properly type out our
// data subscription when performing out get request.
import { BehaviorSubject, Subscription } from 'rxjs';

// Just like when making a component (where you use the @Component call before a class), you need to use
// @Injectable() to tell Angular that the class below that you're exporting is a thing that it should
// make available to inject into your components. This is how your constructor functions magically can
// request instances of this class -- you've told Angular that this class is "injectable" and so it does
// all the work to make that magic possible. Note, NO SEMICOLON after the @Injectable() call.
@Injectable()
export class ContentService {
	// WTF is this??????
	// Keep calm and rock your jello pants.
	// A BehaviorSubject is like an Observable but gives us a little bit more power in that
	// if the ContentService has already retrieved the data when a class subscribes to it, the subscriber
	// to this will automatically receive the retrieved value when it subscribes. If the ContentService
	// hasn't gotten the get() response back yet, then it will receive it after it comes in. Yay!
	// One caveat is that it requires a starting value, so I'm just giving it an empty object for now (notice
	// the {} in the parenthesis). The BehaviorSubject is of the "any" type, since it will return JSON data
	// that we can't predict - that means that it will emit "anything". This keeps the TS compiler happy.
	public dataSubject: BehaviorSubject<any> = new BehaviorSubject<any>({});

	// What's up with the 'any' data type? Well, because Typescript is fancy Javascript, its really hard to
	// define object types for things that can be any shape like a JSON object. So, we tell the compiler that
	// the siteData property is going to be filled by 'anything' to keep it from yelling at us. Get comfy with
	// 'any'; it's your friend and you'll use it often (sometimes just out of frustration when you don't
	// understand why some other data type won't work!) :P
	// Note, we'll make this private because the service will STORE the data, and consumers should ask for it
	// without being able to change it (via a getter function);
	private siteData: any;

	// We'll cache the data subscription so we can unsubscribe to it
	private dataSub: Subscription;

	// This may be a service, but it's still a class, and classes have constructors.
	// Remember, constructors get called when a class is created, and that's the only time that a
	// constructor function is ever called. Ever. Services live for the length of the time the app runs,
	// so the constructor for a service will only be called one time, as the service will never be destroyed.
	constructor(http: Http) {
		// As the component is created, immediately kick off a request to get the site data.
		this.dataSub = http.get('/assets/data/data.json').subscribe(res => this.handleData(res));
	}

	private handleData(data: Response) {
		// Remember what I said about needing to unsubscribe to your subscriptions?
		// Well, since this is a service and it never gets destroyed, you should just unsub once you get the
		// data, since the get() call won't return more than one time. Yay!
		this.dataSub.unsubscribe();

		// The data that comes from the call is of the "Response" data type (note the 'data' parameter to this
		// function is typed to 'Response'. The 'Response' object has a 'json()' method that will give us the
		// response's actual data as an object. Let's call that now.
		this.siteData = data.json();
		// Now that we got the data, we can tell our BehaviorSubject (and anyone who is subscribed to it) that
		// we have it! Calling 'next()' on an observable is how you do that. This will work on pages in the
		// future that retroactively subscribe because this.dataSubject is a BehaviorSubject, and as described
		// above, when somebody retroactively subscribes to a BehaviorSubject they automatically get the last
		// value that that subject emitted at the time that they subscribe. Sweet-ass-ness.
		this.dataSubject.next(this.siteData);
	}
}