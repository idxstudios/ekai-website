import React, { useState } from "react";
import logo from "../../assets/ekai-logo.svg";
import menu from "../../assets/menu-bar.svg";
import "./style.scss";
import { Link, Outlet } from "react-router-dom";

export default function GlobalNavbar() {
  const [showMenu, setShowMenu] = useState();
  return (
    <>
      <div className="main-nav">
        <nav>
          <div className="logo-container flex-row items-center">
            <Link className="logo-container " to="/">
              <img src={logo} alt="Logo" />
              <span className="app-name">ekai</span>
            </Link>

          </div>
          <div className={`${showMenu ? "nav-links": "nav-links-active"}`}>
            <Link onClick={() => setShowMenu(!showMenu)}  to="/">About Us</Link>
            <Link onClick={() => setShowMenu(!showMenu)} to="/career">Career</Link>
            <Link onClick={() => setShowMenu(!showMenu)} to="/FAQs">FAQs</Link>
            <button>TELL ME MORE</button>
          </div>
          <Link onClick={() => setShowMenu(!showMenu)} className="menu-container ">
            <img src={menu} alt="Logo" style={{ width: "50px" }} />
          </Link>
        </nav>

      </div>
      <Outlet />
    </>
  );
}
