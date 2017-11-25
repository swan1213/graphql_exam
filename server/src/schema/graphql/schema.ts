import { gql } from "apollo-server";

export const typeDefs = gql`
    type Reservation {
        arrival: String
        departure: String
        guest_name: String
        hotel_name: String
        id: ID
    }

    type Query {
        reservation(id:ID): Reservation
        reservations: [Reservation!]
    }

    type Mutation {
        createReservation(guest_name:String, hotel_name:String, arrival:String, departure:String): Reservation
    }
`;
