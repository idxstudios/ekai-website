import videothumb from "../../assets/videothumb.jpg";
import ActionVedio from "../../components/ActionVedio";
import React, { useEffect, useState } from "react";
import "./styles.scss";
// import play from "../../assets/play.svg";
// import workplaceImg from "../../assets/workplace-img-one.svg";
// import workplaceGirl from "../../assets/workplace-img-girl.svg";

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
          <button
            className="left-cont-button"
            onClick={() => setOpenDialog(true)}
          >
            Get Started <img src={Arrow} alt="" />
          </button>
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
    </div>
  );
};
