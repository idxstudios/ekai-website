import videothumb from "../../assets/videothumb.jpg";
import ActionVedio from "../../components/ActionVedio";
import React, { useEffect, useState } from "react";
import "./styles.scss";
// import play from "../../assets/play.svg";
// import workplaceImg from "../../assets/workplace-img-one.svg";
// import workplaceGirl from "../../assets/workplace-img-girl.svg";
import { SlackNotionModal } from "../Modal/SlackNotionModal";

import BlurR from "../../assets/blurR.svg";
import Arrow from "../../assets/ArrowRight.svg";
import BlurL from "../../assets/blurR.svg";
import { FormDialog } from "../FormDialog";
// const words = ["repetitive", "interruptions", "busywork", "chaos"];

export const EkaiIntro = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(interval);
  }, []);

  console.log(showFirstImage);

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

  return (
    <div className="ekai-intro-main-cont">
      <img src={BlurR} alt="ekai" className="blurR" />
      <img src={BlurL} alt="ekai" className="blurL" />
      <div className="ekai-intro-cont">
        <div className="left-cont">
          <div className="left-cont-heading">
            <div className="left-cont-span-out">
              AI {"{YOU}"} for the{" "}
              <div className="word-animation">
                <span className="animated-word ">
                  <div>repetitive</div>
                  <div>interruptions</div>
                  <div>busywork</div>
                  <div>chaos</div>
                </span>
              </div>
            </div>
          </div>
          <div className="left-cont-heading">
            <span className="rep-text">More time for what matters</span>
          </div>
          <p className="left-cont-subheading"></p>

          <div className="horizontal">
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
                fontSize: "18px",
                fontWeight: 600,
                height: "48px",
                justifyContent: "center",
                textDecoration: "none",
                width: "220px",
                marginTop: '50px'
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
            </button>
            <button
              className="left-cont-button"
              onClick={() => setOpenDialog(true)}
            >
              Get Started <img src={Arrow} alt="" />
            </button>
          </div>
          <FormDialog open={openDialog} setOpenDialog={setOpenDialog} />
        </div>
        <div className="right-cont">
          <div className="large-image-container">
            <div className="video-box">
              <img src={videothumb} alt="ekai" className="thumbnail" />
              <ActionVedio />
            </div>
          </div>
        </div>
      </div>
      {showSlackModal && <SlackNotionModal onClose={handleCloseModal} />}
    </div>
  );
};
