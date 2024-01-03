import React, { useContext, useEffect } from "react";
import "./NavbarTab.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AppBar, Avatar, Toolbar } from "@mui/material";
import backendapi from "../config";
import { contextNavigate } from "../Context/ContextProvider";

const NavbarTab = () => {
  const url = backendapi.backendURL;

  const { userdata, setUserData } = useContext(contextNavigate);

  const history = useNavigate();

  const navbarNav = async () => {
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

    if (res.status === 210) {
      setUserData(res);
      // history("/dash");
    } else {
      console.log("user not found");
      history("/login");
    }
  };

  useEffect(() => {
    navbarNav();
  });

  const signOut = async () => {
    const token = await localStorage.getItem("userDataToken");
    console.log(token);

    const data = await fetch(`${url}/signOut`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const res = await data.json();
    // console.log(res);

    if (res.status === 201) {
      localStorage.removeItem("userDataToken");
      console.log("Successfully logOut");
      history("/login");
      window.location.reload();
    } else {
      console.log("not remove token");
    }
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          <div className="navbar">
            <div className="containerOfNavbar">
              <div className="tab1">
                <NavLink to={"/"}>
                  <img
                    src="https://shopping-app-xx1p.vercel.app/static/media/Sooraj-logo.4ea9ba32a0c93354b8a8.png"
                    alt="logo"
                  />
                </NavLink>
              </div>
              <div className="tab2">
                {userdata ? (
                  <NavLink to={"/dash"} className={"tab2Nav"}>
                    Dashboard
                  </NavLink>
                ) : (
                  <span>Dashboard</span>
                )}
              </div>
              <div className="tab2">
                <NavLink to={"/login"} className={"tab2Nav"}>
                  Login
                </NavLink>
              </div>
              <div className="tab3">
                <Avatar className="avatarIcon">
                  {userdata
                    ? userdata.getData.email.charAt(0).toUpperCase()
                    : ""}
                </Avatar>

                <div className="avatartab3">
                  <div className="tabOFavatar topEmail">
                    {userdata ? userdata.getData.email : ""}
                  </div>
                  <div className="tabOFavatar">
                    <NavLink to={"/"} className={"tabOfavatarNav"}>
                      Home
                    </NavLink>
                  </div>
                  <div className="tabOFavatar">
                    {userdata ? (
                      <NavLink to={"/dash"} className={"tabOfavatarNav"}>
                        DashBoard
                      </NavLink>
                    ) : (
                      <span>Dashboard</span>
                    )}
                  </div>
                  <div className="tabOFavatar">
                    <NavLink to={"/login"} className={"tabOfavatarNav"}>
                      Login
                    </NavLink>
                  </div>
                  {userdata ? (
                    <div className="tabOFavatar" onClick={signOut}>
                      Log Out
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavbarTab;
