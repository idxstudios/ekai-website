import React from "react";
import logo from "../../assets/ekai-logo.svg";
import "./style.scss";
import { Link,   Outlet } from "react-router-dom";

export default function GlobalNavbar() {
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
      <div className="nav-links">
        <Link to="/">About Us</Link>
        <Link to="/career">Career</Link>
        <button>TELL ME MORE</button>
      </div>
    </nav>
  
    </div>
    <Outlet />
    </>
  );
}
