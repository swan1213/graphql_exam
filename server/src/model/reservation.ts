import { model } from "mongoose";
import { ReservationSchema } from "../schema/mongo/schema";

export const ReservationModel = model("reservation", ReservationSchema);
