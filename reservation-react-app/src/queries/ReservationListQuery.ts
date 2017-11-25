import gql from "graphql-tag";

export const ReservationListQuery = gql`
  {
    reservations {
        id
        guest_name
        hotel_name
        arrival
        departure
    }
  }
`;