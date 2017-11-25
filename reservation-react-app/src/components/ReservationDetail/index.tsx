import React from "react";
import { Query } from "react-apollo";
import { ReservationDetailQuery } from "../../queries/ReservationDetailQuery";
import "./styles.css";

interface Props {
  selectedReservation?: string;
  setSelectedReservation: (id: string) => void;
}

interface ReservationDetail {
  id: string;
  guest_name: string;
  hotel_name: string;
  arrival: string;
  departure: string;
}

interface Data {
  reservation: ReservationDetail;
}
interface Variables {
  id: string;
}

const ReservationDetail: React.FC<Props> = ({
  selectedReservation,
  setSelectedReservation
}) => {
  return (
    <div className="ReservationDetail">
      {selectedReservation ? (
        <Query<Data, Variables>
          query={ReservationDetailQuery}
          variables={{ id: String(selectedReservation) }}
        >
          {({ loading, error, data }) => {
            if (loading) return null;
            if (error || !data) return null;

            return (
              <Detail
                reservation={data.reservation}
                select={(id: string) => {
                  setSelectedReservation(id);
                  window.scrollTo(0, 0);
                }}
              />
            );
          }}
        </Query>
      ) : (
        <>
          <h2>Reservation Detail</h2>
          <div>Please select a reservation</div>
        </>
      )}
    </div>
  );
};

const Detail: React.FC<{
  reservation: ReservationDetail;
  select: (id: string) => void;
}> = ({ reservation, select }) => {
  return (
    <>
      <h2>{reservation.guest_name}</h2>
      {renderItem("Name : ", reservation.guest_name)}
      {renderItem("Hotel : ", reservation.hotel_name)}
      {renderItem("Arraival at : ", reservation.arrival)}
      {renderItem("Departure at : ", reservation.departure)}
    </>
  );
};

export default ReservationDetail;

const renderItem = (label: string, item?: string) => {
  return (
    item && (
      <div>
        <strong>{label}</strong>: {item}
      </div>
    )
  );
};