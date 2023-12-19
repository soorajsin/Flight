import React from 'react'
import {NavLink} from "react-router-dom";
import "./mix.css";

const Login = () => {
  return (
    <>
          <div className="register">
                      <div className="containerRegister">
                              <h1>Welcome to  Login</h1><br/>
                              <div className="reg">
                                        <label htmlFor="email">Email</label><br/>
                                        <input type="email" placeholder='Enter your email ....'/>
                              </div><br/>
                              <div className="reg">
                                        <label htmlFor="password">Password</label><br/>
                                        <input type="password" placeholder='Enter your password ....'/>
                              </div><br/>
                              <div className="reg">
                                        <button>Register</button>
                              </div><br/>
                              <div className="reg">
                                        <p>Your Account not found ? <NavLink to={"/register"} className={"pareg"}>Register</NavLink> </p>
                              </div>
                    </div>
          </div>
    </>
  )
}

export default Login;