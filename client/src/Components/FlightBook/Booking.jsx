import React from "react";
import "./Booking.css";

const Booking = () => {
  return (
    <>
      <div className="booking">
        <div className="containerb">
          <h1> Booking the flight</h1>

          <div className="search">
            <div className="searchbox">
              <label htmlFor="from">From</label>
              <input type="text" placeholder="Search for starting point..." />
            </div>
            <div className="searchbox">
              <label htmlFor="To">To</label>
              <input type="text" placeholder="Enter your ending point..." />
            </div>
            <div className="searchbox">
              <label htmlFor="date">Date</label>
              <input type="date" />
            </div>
            <div className="searchbox">
              <button type="submit">Booking Flight</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
