import React, { SyntheticEvent } from "react";
import { Reservation } from "../ReservationList";

interface Props {
  reservation: Reservation;
  select: (e: SyntheticEvent) => void;
}

const ReservationListItem: React.FC<Props> = ({ reservation, select }) => {
  return (
    <li>
      <strong>
        <a href="#" onClick={select}>
          {reservation.guest_name}
        </a>
      </strong>
    </li>
  );
};

export default ReservationListItem;
