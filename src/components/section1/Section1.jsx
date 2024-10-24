"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BlurR from "../../assets/ArrowRight.svg";
import BlurL from "../../assets/blurR.svg";
import Arrow from "../../assets/ArrowRight.svg";
import videothumb from "../../assets/videothumb.jpg";
import "./style.scss";
import ActionVedio from "../videoplay/ActionVedio";
import Contactus from "../contactus/Contactus";
import { trackEvent } from "@/mixpanel";

const Section1 = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(interval);
  }, []);

  //   console.log(showFirstImage);

  //   const [showSlackModal, setShowSlackModal] = useState(false); // New state for Slack modal

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(interval);
  }, []);

  // const handleAddSlackClick = () => {
  //   setShowSlackModal(true); // Show the Slack modal
  // };

  //   const handleCloseModal = () => {
  //     setShowSlackModal(false); // Hide the Slack modal
  //   };

  const handleGetStarted = () => {
    setOpenDialog(true);
    trackEvent("lead_first_click");
  };
  return (
    <div className="ekai-intro-main-cont">
      <Image
        loading="eager"
        priority={true}
        src={BlurR}
        alt="ekai"
        className="blurR"
      />
      <Image
        loading="eager"
        priority={true}
        src={BlurL}
        alt="ekai"
        className="blurL"
      />
      <div className="ekai-intro-cont">
        <div className="left-cont">
          <div className="left-cont-heading">
            <div className="left-cont-span-out text-center ">
              AI {"{YOU}"} for the{" "}
              <div className="word-animation">
                <span className="animated-word ">
                  <div className="word">repetitive</div>
                  <div className="word">interruptions</div>
                  <div className="word">busywork</div>
                  <div className="word">chaos</div>
                </span>
              </div>
            </div>
          </div>
          <div className="left-cont-heading">
            <span className="rep-text text-center">
              More time for what matters
            </span>
          </div>
          <p className="left-cont-subheading"></p>

          <div className="horizontal">
            <button
              className="left-cont-button"
              onClick={() => handleGetStarted()}
            >
              Get Started{" "}
              <Image loading="eager" priority={true} src={Arrow} alt="" />
            </button>
          </div>
          {/* <FormDialog open={openDialog} setOpenDialog={setOpenDialog} /> */}
        </div>
        <div className="right-cont">
          <div className="large-image-container">
            <div className="video-box">
              <Image
                loading="eager"
                priority={true}
                src={videothumb}
                alt="ekai"
                className="thumbnail"
              />
              <ActionVedio />
            </div>
          </div>
        </div>
      </div>
      <Contactus
        isvisible={openDialog}
        setIsVisible={() => setOpenDialog(false)}
      />
      {/* {showSlackModal && <SlackNotionModal onClose={handleCloseModal} />} */}
    </div>
  );
};

export default Section1;
