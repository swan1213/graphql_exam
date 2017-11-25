import gql from "graphql-tag";

export const ReservationDetailQuery = gql`
  query ReservationDetail($id: ID!) {
    reservation(id:$id) {
	    id
	    guest_name
	    hotel_name
	    arrival
	    departure
	}
  }
`;