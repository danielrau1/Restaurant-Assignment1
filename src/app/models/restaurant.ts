// imports other classes
import { Address } from './address';
import { Review } from './review';

export class Restaurant {

  name: string;
  website: string;
  phone: string;
  rating: number;
  avgMealPrice: number;
  reviews: Review[];
  location: Address;


  constructor(args?) {

    this.name = args.name;
    this.website = args.website;
    this.phone = args.phone;
    this.rating = args.rating;
    this.avgMealPrice = args.avgMealPrice;

    // For the location which is an "inner class"
    this.location = args.location;
    // For the Review
    this.reviews = args.reviews;

  }
}
