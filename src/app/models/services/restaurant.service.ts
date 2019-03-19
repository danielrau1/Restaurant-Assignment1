import { Injectable } from '@angular/core';
import { Restaurant} from '../restaurant';
import {Observable, of} from 'rxjs';
import {Address} from '../address';
import {Review} from '../review';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurants: Restaurant[];

  constructor() {


    this.restaurants = [
      new Restaurant({
        name : 'Pizza Pita',
        website : 'http://www.pizzapita.com',
        phone : '(514)-731-7482',
        rating : 5,
        avgMealPrice : 3,
        location: new Address({
          streetNumber : '7489',
          streetName : 'Decarie blvd',
          apartment : '',
          city : 'Montreal',
          province : '',
          country : 'Canada'
        }),

        reviews : [
          new Review ({author: 3, body: 'i like 3'}),
            new Review ({author: 33, body: 'i like 33'})
        ]


         // reviews : [ new Review ({author: 3, body: 'i like 3'}), new Review ({author: 55, body: 'i like 55'})]


      }),

      new Restaurant({
        name : 'Tav Cafe',
        website : '',
        phone : '(718)-854-45122',
        rating : 6,
        avgMealPrice : 3,
        location: new Address({
          streetNumber : '5748',
          streetName : 'Decarie Blvd',
          apartment : '',
          city : '',
          province : 'QC',
          country : 'Canada'
        }),
        reviews : [ new Review ({
          author: 1,
          body: 'liked it 1'
        })]
      }),

      new Restaurant({
        name : 'Chez Benny',
        website : 'https://www.benny-co.com/',
        phone : '(514)-731-7482',
        rating : 2,
        avgMealPrice : 3,
        location: new Address({
          streetNumber : '5071 Queen Mary Rd',
          streetName : 'Queen Mary Rd',
          apartment : '',
          city : 'Montreal',
          province : 'QC',
          country : 'Canada'
        }),
        reviews :[ new Review ({
          author: 2,
          body: 'liked it 2'
        })]
      }),

    ];



  }

  getRestaurants(): Observable<Restaurant[]> {

    return of(this.restaurants);

  }



}
