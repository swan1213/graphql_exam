import React, { useState } from "react";
import "./App.css";
import ReservationList from "./components/ReservationList";
import ReservationDetail from "./components/ReservationDetail";
import CreateReservation from "./components/CreateReservation";

const App: React.FC = () => {
  const [selectedReservation, setSelectedReservation] = useState<string>();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Reservation Managment</h1>
      </header>
      <div className="Reservation-wrapper">
        <ReservationList setSelectedReservation={setSelectedReservation} />
        <ReservationDetail
          selectedReservation={selectedReservation}
          setSelectedReservation={setSelectedReservation}
        />
        <CreateReservation />
      </div>
    </div>
  );
};

export default App;
