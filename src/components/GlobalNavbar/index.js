import React, { useState, useEffect } from "react";
import logo from "../../assets/ekai-logo.svg";
import menu from "../../assets/menu-bar.svg";
import "./style.scss";
import { Link, Outlet } from "react-router-dom";
import { FormDialog } from "../FormDialog";

export default function GlobalNavbar() {
  const [showMenu, setShowMenu] = useState();
  const [showFirstImage, setShowFirstImage] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(interval);
  }, []);

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
          <div className={`${showMenu ? "nav-links": "nav-links-active"}`}>
            <Link onClick={() => setShowMenu(!showMenu)}  to="/">About Us</Link>
            <Link onClick={() => setShowMenu(!showMenu)} to="/career">Career</Link>
            {/* <Link onClick={() => setShowMenu(!showMenu)} to="/FAQs">FAQs</Link> */}
            <button
            className="left-cont-button"
            onClick={() => setOpenDialog(true)}
          >
            TELL ME MORE
          </button>
          <FormDialog open={openDialog} setOpenDialog={setOpenDialog} />
          <a
              href="https://slack.com/oauth/v2/authorize?client_id=7053055605876.7036441336423&scope=app_mentions:read,channels:history,channels:read,chat:write,commands,files:read,groups:history,groups:read,im:history,im:read,im:write,links:read,team:read,users.profile:read,users:read,users:read.email,users:write&user_scope=channels:read,chat:write,groups:read,im:history,im:read,im:write,search:read,team:read,users:read,users:read.email"
              className="add-to-slack-button"
            >
              <img
                alt="Add to Slack"
                height="40"
                width="139"
                src="https://platform.slack-edge.com/img/add_to_slack.png"
                srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
              />
            </a>
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
