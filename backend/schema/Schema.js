import { Schema, model } from "mongoose";

const FlatSchema = new Schema({
  rentalType: String,
  rent: String,
  singleSharingRent: String,
  twinSharingRent: String,
  threeSharingRent: String,
  fourSharingRent: String,
  securityDeposit: String,
  address: String,
  city: String,
  state: String,
  carpetArea: String,
  furnishing: String,
  flatType: String,
  bathroom: String,
  parking: String,
  balcony: String,
  totalFloor: String,
  onFloor: String,
  tenantsPreferred: String,
  selectedItems: Array,
  selectedBuildingItems: Array,
  amenities: Object,
  imageUrl: Array,
});
export const Flats = model("Flats", FlatSchema);
