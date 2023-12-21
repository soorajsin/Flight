import React, { useContext, useEffect, useState } from "react";
import "./Booking.css";
import backendapi from "../config";
import { contextNavigate } from "../Context/ContextProvider";

const Booking = () => {
  const url = backendapi.backendURL;

  const { setUserData } = useContext(contextNavigate);

  const bookingFlight = async () => {
    const token = await localStorage.getItem("userDataToken");
    // console.log(token);

    const data = await fetch(`${url}/validator`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const res = await data.json();

    if (res.status === 210) {
      // console.log(res);
      setUserData(res);
    } else {
      console.log("Not found user");
    }
  };

  useEffect(() => {
    bookingFlight();
  });

  const [sendData, setSendData] = useState({
    from: "",
    to: "",
    date: "",
  });

  const changeData = async (e) => {
    const { name, value } = e.target;

    setSendData({
      ...sendData,
      [name]: value,
    });
  };

  console.log(sendData);

  const sendDataForBooking = async (e) => {
    e.preventDefault();

    const { from, to, date } = sendData;

    if (from === "") {
      alert("Please enter From city!");
    } else if (to === "") {
      alert("Please enter To city!");
    } else if (date === "") {
      alert("Please select Date!");
    } else {
      console.log("data");

      const token = await localStorage.getItem("userDataToken");

      const data = await fetch(`${url}/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          sendData,
        }),
      });

      const res = await data.json();
      // console.log(res);

      if (res.status === 201) {
        console.log(res);
        alert("Flight Booking Successfully done ...");
        setSendData({ ...sendData, from: "", to: "", date: "" });
      } else {
        console.log("not added data");
      }
    }
  };

  return (
    <>
      <div className="booking">
        <div className="containerb">
          <h1> Booking the flight</h1>

          <div className="search">
            <div className="searchbox">
              <label htmlFor="from">From</label>
              <input
                type="text"
                name="from"
                value={sendData.from}
                onChange={changeData}
                placeholder="Search for starting point..."
              />
            </div>
            <div className="searchbox">
              <label htmlFor="To">To</label>
              <input
                type="text"
                name="to"
                value={sendData.to}
                onChange={changeData}
                placeholder="Enter your ending point..."
              />
            </div>
            <div className="searchbox">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                value={sendData.date}
                onChange={changeData}
              />
            </div>
            <div className="searchbox">
              <button type="submit" onClick={sendDataForBooking}>
                Booking Flight
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
