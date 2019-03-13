import {Component, OnInit} from '@angular/core';
import{Restaurant} from './models/restaurant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rests: Restaurant[];

  constructor() {
    this.rests = [];
    let temp = new Restaurant();
    temp.name = 'TAV Cafe';
    temp.phone = '514 12315646';
    temp.priceRange = 1;
    temp.rating = 5;
    temp.website = 'http://www.cafetav.com';
    this.rests.push(temp);


    temp = new Restaurant();
    temp.name = 'Pizza Pita';
    temp.phone = '514 17835646';
    temp.priceRange = 3;
    temp.rating = 51;
    temp.website = 'http://www.google.com';
    this.rests.push(temp);
  }
}
