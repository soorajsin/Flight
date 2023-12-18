import React from "react";
import "./FooterTab.css";

const FooterTab = () => {
  return (
    <>
      <div className="footer">
        <div className="containerOfFooter">
          <div className="About">
            About
            <ul>
              <li>Dashboard</li>
              <li>Flight Booking</li>
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
