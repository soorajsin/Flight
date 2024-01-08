import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./mix.css";
import backendapi from "../config";

const Login = () => {
  const history = useNavigate();

  const url = backendapi.backendURL;

  const [sendData, setSendData] = useState({
    email: "",
    password: "",
  });

  const changeData = async (e) => {
    const { name, value } = e.target;

    setSendData({
      ...sendData,
      [name]: value,
    });
  };

  console.log(sendData);

  const submitLogin = async (e) => {
    e.preventDefault();

    const { email, password } = sendData;

    if (email === "") {
      alert("Please enter your Email");
    } else if (!email.includes("@gmail.com")) {
      alert("Invalid Gmail ID  Eg:-  abc@gmail.com");
    } else if (password === "") {
      alert("Please enter your Password");
    } else if (password.length < 6) {
      alert("Password should be at least 6 characters long.");
    } else {
      console.log("login");

      const data = await fetch(`${url}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const res = await data.json();

      // console.log(res);

      if (res.status === 201) {
        console.log(res);

        localStorage.setItem("userDataToken", res.data.token);

        history("/dash");
      } else if (res.status === 202) {
        alert("Email not found");

        setSendData({ ...sendData, email: "", password: "" });
      } else if (res.status === 203) {
        alert("Password is not matched");

        setSendData({ ...sendData, password: "" });
      }
    }
  };

  return (
    <>
      <div className="register">
        <div className="containerRegister">
          <h1  className="containerRegisterLogin">Welcome to Login</h1>
          <br />
          <div className="reg">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="email"
              value={sendData.email}
              onChange={changeData}
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
              value={sendData.password}
              onChange={changeData}
              placeholder="Enter your password ...."
            />
          </div>
          <br />
          <div className="reg">
            <button onClick={submitLogin}>Login</button>
          </div>
          <br />
          <div className="reg">
            <p>
              Your Account not found ?{" "}
              <NavLink to={"/register"} className={"pareg"}>
                Register
              </NavLink>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
