import { Component } from '@angular/core';
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
export class HomeComponent {
  constructor() { console.log('yo');}


}

