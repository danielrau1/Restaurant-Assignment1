import { Component, OnInit, Input } from '@angular/core';
import {Restaurant} from '../../models/restaurant';

@Component({
  selector: 'app-rest-card',
  templateUrl: './rest-card.component.html',
  styleUrls: ['./rest-card.component.scss']
})
export class RestCardComponent implements OnInit {
  @Input() restaurant: Restaurant;
  now = new Date();

  constructor() {
    //this.restaurant = new Restaurant();

  }

  ngOnInit() {
    /*
    this.restaurant.name = 'TAV Cafe';
    this.restaurant.phone = '514 12315646';
    this.restaurant.priceRange = 1;
    this.restaurant.rating = 5;
    this.restaurant.website = 'http://www.cafetav.com';
  */
  }

}
