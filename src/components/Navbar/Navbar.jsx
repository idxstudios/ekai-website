"use client";
import React, { useEffect, useState } from "react";
import "./navbar.css";
import Image from "next/image";
import Logo from "../../assets/ekai-logo.svg";
import Link from "next/link";
import arrow from "../../assets/ArrowRight.svg";
import Contactus from "../contactus/Contactus";
import slackLogo from "../../assets/slacklogo.png";
import { AddToSlack } from "../addtoslack/AddToSlack";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState();
  const [showFirstImage, setShowFirstImage] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [showSlackModal, setShowSlackModal] = useState(false); // New state for Slack modal
  const [isSlackInstallRoute, setIsSlackInstallRoute] = useState(false);
  // const location = useLocation();
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Run only on the client side
    if (typeof window !== 'undefined') {
      setIsSlackInstallRoute(window.location.pathname === "/slack/install");
    }
  }, []);
  return (
    <>
      <div className="main-nav">
        <nav>
          <div>
            <div className="logo-container flex-row items-center">
              <Link className="logo-container " href="/">
                <Image src={Logo} alt="Logo" />
                {/* <span className="app-name">ekai</span> */}
              </Link>
            </div>
            <div className={`${showMenu ? "nav-links" : "nav-links-active"}`}>
              <Link onClick={() => setShowMenu(!showMenu)} href="/#why-ekai">
                Why Ekai
              </Link>
              <Link onClick={() => setShowMenu(!showMenu)} href="/#features">
                Features
              </Link>
              <Link onClick={() => setShowMenu(!showMenu)} href="/#pricing">
                Pricing
              </Link>

              {/* <FormDialog open={openDialog} setOpenDialog={setOpenDialog} /> */}
            </div>
          </div>
          <div>
            {isSlackInstallRoute? (
              <button
                className="left-cont-button"
                onClick={() => setShowSlackModal(true)}
              >
                <Image src={slackLogo} alt="ekai" /> Add to Slack
              </button>
            ) : (
              <button
                className="left-cont-button"
                onClick={() => setOpenDialog(true)}
              >
                Contact Us <Image src={arrow} alt="ekai" />
              </button>
            )}
          </div>

          <div
            className="hamburger-menu"
            // onClick={toggleMenu}
            onClick={() => setShowMenu(!showMenu)}
          >
            <div className={`line line1 ${showMenu ? "open" : ""}`}></div>
            <div className={`line line2 ${showMenu ? "open" : ""}`}></div>
            <div className={`line line3 ${showMenu ? "open" : ""}`}></div>
          </div>
        </nav>
        <Contactus
          isvisible={openDialog}
          setIsVisible={() => setOpenDialog(false)}
        />
        <AddToSlack
        isvisible={showSlackModal}
        setIsVisible={()=>setShowSlackModal(false)} />
      </div>
    </>
  );
};

export default Navbar;
