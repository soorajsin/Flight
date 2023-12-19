import React, { useState } from "react";
import "./mix.css";
import { NavLink } from "react-router-dom";

const Register = () => {
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
            <button>Register</button>
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
