import React from "react";
import "./FooterTab.css";
import { NavLink } from "react-router-dom";

const FooterTab = () => {
  return (
    <>
      <div className="footer">
        <div className="containerOfFooter">
          <div className="About">
            About
            <ul>
              <li>
                <NavLink to={"/dash"} className={"footerLink"}>Dashboard</NavLink>
              </li>
              <li>
                <NavLink to={"/"} className={"footerLink"}>Flight Booking</NavLink>
              </li>
            </ul>
          </div>
          <div className="contact">
            Contact
            <ul>
              <li>91+ 7505769256</li>
              <li>soorajsingh@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterTab;
