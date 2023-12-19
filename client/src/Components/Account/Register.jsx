import React from 'react'
import "./mix.css";
import { NavLink } from 'react-router-dom';

const Register = () => {
  return (
    <>
          <div className="register">
                    <div className="containerRegister">
                              <h1>Welcome to  Register</h1><br/>
                              <div className="reg">
                                        <label htmlFor="name">Name</label><br/>
                                        <input type="text" placeholder='Enter your name ...'/>
                              </div><br/>
                              <div className="reg">
                                        <label htmlFor="email">Email</label><br/>
                                        <input type="email" placeholder='Enter your email ....'/>
                              </div><br/>
                              <div className="reg">
                                        <label htmlFor="password">Password</label><br/>
                                        <input type="password" placeholder='Enter your password ....'/>
                              </div><br/>
                              <div className="reg">
                                        <label htmlFor="cpassword">Confirm Password</label><br/>
                                        <input type="password" placeholder='Enter your confirm password ....' />
                              </div><br/>
                              <div className="reg">
                                        <button>Register</button>
                              </div><br/>
                              <div className="reg">
                                        <p>Your Already have a Account ? <NavLink to={"/login"}  className={"pareg"}>Login</NavLink> </p>
                              </div>
                    </div>
          </div>
    </>
  )
}

export default Register