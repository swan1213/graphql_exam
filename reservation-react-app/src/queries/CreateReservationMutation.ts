import gql from 'graphql-tag';

export const SAVE_RESERVATION = gql`
  mutation createReservation($guest_name:String, $hotel_name:String, $arrival:String, $departure:String) {
    createReservation(guest_name: $guest_name, hotel_name:$hotel_name, arrival: $arrival, departure:$departure) {
    	id
    	guest_name
    	hotel_name
    	arrival
    	departure
    }
  }
`;