import React, { useState, useEffect } from "react";
import logo from "../../assets/ekai-logo.svg";
import menu from "../../assets/menu-bar.svg";
import "./style.scss";
import { Link, Outlet } from "react-router-dom";
import { FormDialog } from "../FormDialog";
import { SlackNotionModal } from "../Modal/SlackNotionModal";

export default function GlobalNavbar() {
  const [showMenu, setShowMenu] = useState();
  const [showFirstImage, setShowFirstImage] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [showSlackModal, setShowSlackModal] = useState(false); // New state for Slack modal

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(interval);
  }, []);

  const handleAddSlackClick = () => {
    setShowSlackModal(true); // Show the Slack modal
  };

  const handleCloseModal = () => {
    setShowSlackModal(false); // Hide the Slack modal
  };

  console.log(showFirstImage);
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
          <div className={`${showMenu ? "nav-links" : "nav-links-active"}`}>
            <Link onClick={() => setShowMenu(!showMenu)} to="/">
              About Us
            </Link>
            <Link onClick={() => setShowMenu(!showMenu)} to="/career">
              Career
            </Link>
            {/* <Link onClick={() => setShowMenu(!showMenu)} to="/FAQs">FAQs</Link> */}
            {/* <button
            className="left-cont-button"
            onClick={() => setOpenDialog(true)}
          >
            TELL ME MORE
          </button> */}
            <FormDialog open={openDialog} setOpenDialog={setOpenDialog} />
            <button
              onClick={handleAddSlackClick}
              className="add-to-slack-button"
              style={{
                alignItems: "center",
                color: "#fff",
                backgroundColor: "#4A154B",
                border: 0,
                borderRadius: "44px",
                display: "inline-flex",
                fontFamily: "Lato, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                height: "44px",
                justifyContent: "center",
                textDecoration: "none",
                width: "204px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: "16px", width: "16px", marginRight: "12px" }}
                viewBox="0 0 122.8 122.8"
              >
                <path
                  d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z"
                  fill="#e01e5a"
                ></path>
                <path
                  d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z"
                  fill="#36c5f0"
                ></path>
                <path
                  d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z"
                  fill="#2eb67d"
                ></path>
                <path
                  d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z"
                  fill="#ecb22e"
                ></path>
              </svg>
              Add to Slack
            </button>
          </div>
          <Link
            onClick={() => setShowMenu(!showMenu)}
            className="menu-container "
          >
            <img src={menu} alt="Logo" style={{ width: "50px" }} />
          </Link>
        </nav>
      </div>
      {showSlackModal && <SlackNotionModal onClose={handleCloseModal} />}
      <Outlet />
    </>
  );
}
