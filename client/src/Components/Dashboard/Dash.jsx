import React, { useContext, useEffect } from "react";
import "./Dash.css";
import backendapi from "../config";
import { contextNavigate } from "../Context/ContextProvider";

const Dash = () => {
  const url = backendapi.backendURL;

  const { userdata, setUserData } = useContext(contextNavigate);

  const dashboardUser = async () => {
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
    // console.log(res);

    if (res.status === 210) {
      console.log("User found");
      // console.log(res);
      setUserData(res);
    } else {
      console.log("User not Found");
    }
  };

  useEffect(() => {
    dashboardUser();
  });

  return (
    <>
      <div className="dash">
        <div className="dashcontainer">
          <h1>Welcome to Dashboard</h1>
          <br />
          <div className="dashbox">
            {userdata
              ? userdata.getData.bookingTicket.map((bookingTicket, index) => (
                  <div key={index} className="data">
                    <h3>{bookingTicket.from}</h3>
                    <h3>{bookingTicket.to}</h3>
                    <h3>{bookingTicket.date}</h3>
                    <div className="remove">
                      <i className="fa-solid fa-trash"></i>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dash;
