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
    this.location = new Address({});
    this.location.streetNumber = args.location.streetNumber;
    this.location.streetName = args.location.streetName;
    this.location.apartment = args.location.apartment;
    this.location.city = args.location.city;
    this.location.province = args.location.province;
    this.location.country = args.location.country;

  }
}
