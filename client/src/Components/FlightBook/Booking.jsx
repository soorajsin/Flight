import React, { useContext, useEffect } from "react";
import "./Booking.css";
import backendapi from "../config";
import { contextNavigate } from "../Context/ContextProvider";

const Booking = () => {

  const url=backendapi.backendURL;

  const {userdata, setUserData}=useContext(contextNavigate);

  const bookingFlight=async()=>{
    const token=await localStorage.getItem("userDataToken");
    // console.log(token);

    const data=await fetch(`${url}/validator`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        Authorization:token
      }
    })

    const res=await data.json();

    if(res.status === 201){
      console.log(res);
    }else{
      console.log("Not found user");
    }
  }

  useEffect(()=>{
    bookingFlight();
  })

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
