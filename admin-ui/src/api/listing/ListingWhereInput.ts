import { StringFilter } from "../../util/StringFilter";
import { ListingWhereUniqueInput } from "./ListingWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";

export type ListingWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  listingCreatedBy?: ListingWhereUniqueInput;
  listings?: ListingWhereUniqueInput;
  locationData?: JsonFilter;
  locationType?: StringFilter;
  mapData?: JsonFilter;
  photos?: JsonFilter;
  placeAmeneties?: JsonFilter;
  placeSpace?: JsonFilter;
  placeType?: StringFilter;
  price?: DecimalFilter;
  title?: StringFilter;
  trips?: TripListRelationFilter;
  wishlists?: WishlistListRelationFilter;
};
