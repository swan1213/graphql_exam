import React, { useState } from "react";
import { useMutation } from 'react-apollo';
import { SAVE_RESERVATION } from "../../queries/CreateReservationMutation";

export default function CreateReservation() {

 	const [guest_name, setGuestName] = useState('');
  	const [hotel_name, setHotelName] = useState('');
  	const [arrival, setArrival] = useState('');
  	const [departure, setDeparture] = useState('');

  	const [createReservation, { error, data }] = useMutation(SAVE_RESERVATION);

  return (
    <div>
      <h3>Add a Reservation</h3>
      {error ? <p>Oh no! {error.message}</p> : null}
      {data && data.reservation ? <p>Saved!</p> : null}
      <form>
        <p>
          <label>Name</label>
          <input
            name="guest_name"
            onChange={e => setGuestName(e.target.value)}
          />
        </p>
        <p>
          <label>Hotel Name</label>
          <input
            name="hotel_name"
            onChange={e => setHotelName(e.target.value)}
          />
        </p>
        <p>
          <label>Arrival</label>
          <input
            name="arrival"
            onChange={e => setArrival(e.target.value)}
          />
        </p>
        <p>
          <label>Departure</label>
          <input
            name="departure"
            onChange={e => setDeparture(e.target.value)}
          />
        </p>
        <button onClick={() => {console.log(guest_name);
        	guest_name && hotel_name && new Date(arrival) && new Date(departure) && createReservation({variables:{guest_name, hotel_name, arrival, departure}})}}>
          Add
        </button>
      </form>
    </div>
  );
}