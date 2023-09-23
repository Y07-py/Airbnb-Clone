import { JsonValue } from "type-fest";
import { Decimal } from "decimal.js";
import { Trip } from "../trip/Trip";
import { Wishlist } from "../wishlist/Wishlist";

export type Listing = {
  createdAt: Date;
  description: string;
  id: string;
  listingCreatedBy?: Listing;
  listings?: Listing | null;
  locationData: JsonValue;
  locationType: string;
  mapData: JsonValue;
  photos: JsonValue;
  placeAmeneties: JsonValue;
  placeSpace: JsonValue;
  placeType: string;
  price: Decimal;
  title: string;
  trips?: Array<Trip>;
  updatedAt: Date;
  wishlists?: Array<Wishlist>;
};
