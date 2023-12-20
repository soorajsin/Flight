import React, { useState } from "react";
import "./mix.css";
import { NavLink, useNavigate } from "react-router-dom";
import backendAPI from "../config";

const Register = () => {
  const url = backendAPI.backendURL;

  const history = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const changeSendData = async (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  console.log(data);

  const submitRegister = async (e) => {
    e.preventDefault();

    const { name, email, password, cpassword } = data;

    if (name === "") {
      alert("Name is required");
    } else if (email === "") {
      alert("Email is required");
    } else if (!email.includes("@gmail.com")) {
      alert("Invalid Gmail Id  Eg:-  abc@gmail.com ");
    } else if (password === "") {
      alert("Password is Required");
    } else if (password.length < 6) {
      alert("Password should be of length 6");
    } else if (cpassword === "") {
      alert("Confirm Password is required");
    } else if (cpassword.length < 6) {
      alert(`Confirm Password must be atleast 6 characters long`);
    } else if (password !== cpassword) {
      alert("Both Passwords are not the same");
    } else {
      console.log("register");

      const dataapi = await fetch(`${url}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, cpassword }),
      });

      const res = await dataapi.json();

      // console.log(res);
      if (res.status === 201) {
        console.log(res);

        history("/login");
      } else if (res.status === 202) {
        alert("User Already registered ...");

        setData({ ...data, name: "", email: "", password: "", cpassword: "" });
      }
    }
  };

  return (
    <>
      <div className="register">
        <div className="containerRegister">
          <h1>Welcome to Register</h1>
          <br />
          <div className="reg">
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={changeSendData}
              placeholder="Enter your name ..."
            />
          </div>
          <br />
          <div className="reg">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={changeSendData}
              placeholder="Enter your email ...."
            />
          </div>
          <br />
          <div className="reg">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={changeSendData}
              placeholder="Enter your password ...."
            />
          </div>
          <br />
          <div className="reg">
            <label htmlFor="cpassword">Confirm Password</label>
            <br />
            <input
              type="password"
              name="cpassword"
              value={data.cpassword}
              onChange={changeSendData}
              placeholder="Enter your confirm password ...."
            />
          </div>
          <br />
          <div className="reg">
            <button onClick={submitRegister}>Register</button>
          </div>
          <br />
          <div className="reg">
            <p>
              Your Already have a Account ?{" "}
              <NavLink to={"/login"} className={"pareg"}>
                Login
              </NavLink>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
