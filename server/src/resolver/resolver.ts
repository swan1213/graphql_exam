import { ReservationModel } from "../model/reservation";

export const resolvers = {
    Query: {
        async reservation(parent: any, args: any, _) {
            return ReservationModel.findById(args.id).exec();
        },

        async reservations(parent: any, args: any, _) {
            return ReservationModel.find().exec();
        },
    },

    Mutation: {
        async createReservation(parent: any, args: any, _) {
            const reservation = new ReservationModel(args);
            return reservation.save();
        }
    },
};
