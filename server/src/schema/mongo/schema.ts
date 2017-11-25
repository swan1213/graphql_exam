import { Schema } from "mongoose";

export const ReservationSchema = new Schema({
  guest_name: {
    type: String
  },
  hotel_name: {
    type: String
  },
  arrival: {
    type: String
  },
  departure: {
    type: String
  }
}, {id: true});
