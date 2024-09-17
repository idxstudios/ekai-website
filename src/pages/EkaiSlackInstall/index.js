import React from "react";
import "./styles.scss";
import { SlackNotionModal } from "../../components/Modal/SlackNotionModal";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import logo from "../../assets/ekai-logo.svg";

export default function EkaiSlackInstall() {
  return (
    <div className="">
      <div className="main-nav">
        <nav>
          <div>
            <div className="logo-container flex-row items-center">
              <Link className="logo-container " to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <SlackNotionModal />
      <Footer />
    </div>
  );
}
