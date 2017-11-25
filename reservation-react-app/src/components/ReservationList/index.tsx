import React, { SyntheticEvent } from "react";
import { Query } from "react-apollo";
import { ReservationListQuery } from "../../queries/ReservationListQuery";
import ReservationListItem from "../ReservationListItem";
import "./styles.css";

interface Props {
  setSelectedReservation: (id: string) => void;
}

export interface Reservation {
  id: string;
  guest_name: string;
  hotel_name: string;
  arrival: string;
  departure: string;
}

interface Data {
  reservations: Reservation[];
}

const ReservationList: React.FC<Props> = ({ setSelectedReservation }) => {
  return (
    <div className="ReservationList">
      <h2>All Reservations</h2>
      <Query<Data> query={ReservationListQuery}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error || !data) return null;
          return (
            <ul>
              {data.reservations.map(reservation => (
                <ReservationListItem
                  key={reservation.id}
                  reservation={reservation}
                  select={(e: SyntheticEvent) => {
                    e.preventDefault();
                    setSelectedReservation(reservation.id);
                    window.scrollTo(0, 0);
                  }}
                />
              ))}
            </ul>
          );
        }}
      </Query>
    </div>
  );
};

export default ReservationList;