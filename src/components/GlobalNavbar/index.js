import React, { useState, useEffect } from "react";
import logo from "../../assets/ekai-logo.svg";
// import menu from "../../assets/menu-bar.svg";
import "./style.scss";
import { Link, Outlet } from "react-router-dom";
import { FormDialog } from "../FormDialog";
import arrow from "../../assets/ArrowRight.svg"
// import { SlackNotionModal } from "../Modal/SlackNotionModal";
// import { trackEvent } from "../../mixpanel";

export default function GlobalNavbar() {
  const [showMenu, setShowMenu] = useState();
  const [showFirstImage, setShowFirstImage] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  // const [showSlackModal, setShowSlackModal] = useState(false); // New state for Slack modal

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(interval);
  }, []);

  // const handleAddSlackClick = () => {
  //   trackEvent("add_slack")    
  //   setShowSlackModal(true); // Show the Slack modal
  // };

  // const handleCloseModal = () => {
  //   setShowSlackModal(false); // Hide the Slack modal
  // };

  console.log(showFirstImage);
  return (
    <>
      <div className="main-nav">
        <nav>
          <div>
            <div className="logo-container flex-row items-center">
              <Link className="logo-container " to="/">
                <img src={logo} alt="Logo" />
                {/* <span className="app-name">ekai</span> */}
              </Link>
            </div>
            <div className={`${showMenu ? "nav-links" : "nav-links-active"}`}>
              <Link onClick={() => setShowMenu(!showMenu)} to="#why-ekai">Why Ekai</Link>
              <Link onClick={() => setShowMenu(!showMenu)} to="#features">Features</Link>
              <Link onClick={() => setShowMenu(!showMenu)} to="#pricing">Pricing</Link>


              <FormDialog open={openDialog} setOpenDialog={setOpenDialog} />
            </div>
          </div>
          <div>

            {/* <a
              //href="https://slack.com/oauth/v2/authorize?scope=app_mentions%3Aread%2Cchannels%3Ahistory%2Cchannels%3Aread%2Cchat%3Awrite%2Cgroups%3Aread%2Cgroups%3Ahistory%2Ccommands%2Cfiles%3Aread%2Cim%3Ahistory%2Cim%3Aread%2Cim%3Awrite%2Clinks%3Aread%2Cteam%3Aread%2Cusers.profile%3Aread%2Cusers%3Aread%2Cusers%3Aread.email%2Cusers%3Awrite&amp;user_scope=channels%3Aread%2Cchat%3Awrite%2Cgroups%3Aread%2Cim%3Ahistory%2Cim%3Aread%2Cim%3Awrite%2Csearch%3Aread%2Cteam%3Aread%2Cusers%3Aread%2Cusers%3Aread.email&amp;redirect_uri=https%3A%2F%2Fapp.ekai.ca%2Fslack%2Foauth_redirect&amp;client_id=7053055605876.7036441336423&amp;state=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnN0YWxsT3B0aW9ucyI6eyJzY29wZXMiOlsiYXBwX21lbnRpb25zOnJlYWQiLCJjaGFubmVsczpoaXN0b3J5IiwiY2hhbm5lbHM6cmVhZCIsImNoYXQ6d3JpdGUiLCJjb21tYW5kcyIsImZpbGVzOnJlYWQiLCJncm91cHM6aGlzdG9yeSIsImdyb3VwczpyZWFkIiwiaW06aGlzdG9yeSIsImltOnJlYWQiLCJpbTp3cml0ZSIsImxpbmtzOnJlYWQiLCJ0ZWFtOnJlYWQiLCJ1c2Vycy5wcm9maWxlOnJlYWQiLCJ1c2VyczpyZWFkIiwidXNlcnM6cmVhZC5lbWFpbCIsInVzZXJzOndyaXRlIl0sInVzZXJTY29wZXMiOlsiY2hhbm5lbHM6cmVhZCIsImNoYXQ6d3JpdGUiLCJncm91cHM6cmVhZCIsImltOmhpc3RvcnkiLCJpbTpyZWFkIiwiaW06d3JpdGUiLCJzZWFyY2g6cmVhZCIsInRlYW06cmVhZCIsInVzZXJzOnJlYWQiLCJ1c2VyczpyZWFkLmVtYWlsIl0sIm1ldGFkYXRhIjoiZWthaSIsInJlZGlyZWN0VXJpIjoiaHR0cHM6Ly9hcHAuZWthaS5jYS9zbGFjay9vYXV0aF9yZWRpcmVjdCJ9LCJub3ciOiIyMDI0LTA4LTEyVDIwOjI3OjA4LjczOVoiLCJyYW5kb20iOjgxODI1MSwiaWF0IjoxNzIzNDk0NDI4fQ.dOhSPsB9QPZNRRoZKFq6qUk_cc-UGh8BO8kRFLmYf54&amp;"
              href="https://app.ekai.ca/slack/install"
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
            </a> */}

            {/* <button
              onClick={handleAddSlackClick}
              className="add-to-slack-button-nav"
              style={{
                alignItems: "center",
                color: "#fff",
                backgroundColor: "#4A154B",
                border: 0,
                borderRadius: "44px",
                display: "inline-flex",
                fontFamily: "Lato, sans-serif",
                fontSize: "18px",
                fontWeight: 600,
                height: "48px",
                justifyContent: "center",
                textDecoration: "none",
                width: "204px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: "25px", width: "25px", marginRight: "12px" }}
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
            </button> */}
            <button
              className="left-cont-button"
              onClick={() => setOpenDialog(true)}
            >
              Contact Us <img src={arrow} alt="ekai" />
            </button>
          </div>
          {/* <Link
            onClick={() => setShowMenu(!showMenu)}
            className="menu-container "
          >
            <img src={menu} alt="Logo" style={{ width: "50px" }} />
          </Link> */}
          <div className="hamburger-menu"
            // onClick={toggleMenu} 
            onClick={() => setShowMenu(!showMenu)}>
            <div className={`line line1 ${showMenu ? "open" : ""}`}></div>
            <div className={`line line2 ${showMenu ? "open" : ""}`}></div>
            <div className={`line line3 ${showMenu ? "open" : ""}`}></div>
          </div>

        </nav>
      </div>
      {/* {showSlackModal && <SlackNotionModal onClose={handleCloseModal} />} */}
      <Outlet />
    </>
  );
}
