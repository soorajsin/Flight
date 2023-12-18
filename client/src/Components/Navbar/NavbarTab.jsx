import React from "react";
import "./NavbarTab.css";
import { NavLink } from "react-router-dom";
import { AppBar, Avatar, Toolbar } from "@mui/material";

const NavbarTab = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <div className="navbar">
            <div className="containerOfNavbar">
              <div className="tab1">
                <NavLink to={"#"}>
                  <img
                    src="https://shopping-app-xx1p.vercel.app/static/media/Sooraj-logo.4ea9ba32a0c93354b8a8.png"
                    alt="logo"
                  />
                </NavLink>
              </div>
              <div className="tab2">Dashboard</div>
              <div className="tab3">
                <Avatar />
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavbarTab;
