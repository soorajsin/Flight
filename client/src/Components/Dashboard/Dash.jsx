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
      <h1 className="h12">Dashboard</h1>
      {userdata ? userdata.getData.email : ""}
    </>
  );
};

export default Dash;
