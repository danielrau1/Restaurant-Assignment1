// region Imports
import {Address} from './Address';
import {Review} from './Review';
// endregion

export class Restaurant {
  // region Attributes
  name: string;
  website: string;
  phone: string;
  rating: number;
  priceRange: number;
  reviews: Review[];
  location: Address;
  // endregion
}
