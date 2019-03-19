import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../../models/restaurant';
import {RestaurantService} from '../../models/services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  rests: Restaurant[];

  /***********************   R&D  **************************/
  title = 'The Heroes Table';
   heroes = [
    {id: 1, name: 'Superman'},
    {id: 2, name: 'Batman'},
    {id: 5, name: 'BatGirl'},
    {id: 3, name: 'Robin'},
    {id: 4, name: 'Flash'}
  ];




   /*********************************************************/

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.restaurantService.getRestaurants()
      .subscribe(restaurants => this.rests = restaurants);
  }

}
