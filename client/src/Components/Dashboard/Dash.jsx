import React, { useEffect } from "react";
import "./Dash.css";
import backendapi from "../config";

const Dash = () => {
  const url = backendapi.backendURL;

  const dashboardUser = async () => {
    const token = await localStorage.getItem("userDataToken");
    // console.log(token);

    const data = await fetch(`${url}/validator`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const res = await data.json();
    console.log(res);
  };

  useEffect(() => {
    dashboardUser();
  });

  return (
    <>
      <h1 className="h12">Dashboard</h1>
    </>
  );
};

export default Dash;
