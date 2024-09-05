import React, { useEffect, useState } from "react";
import "./styles.scss";
// import play from "../../assets/play.svg";
// import workplaceImg from "../../assets/workplace-img-one.svg";
// import workplaceGirl from "../../assets/workplace-img-girl.svg";
import { FormDialog } from "../FormDialog";
import videothumb from "../../assets/videothumb.jpg";

import ActionVedio from "../../components/ActionVedio";

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
      <div className="ekai-intro-cont flex-row items-center">
        <div className="left-cont">

          <div className="left-cont-heading">
            AI {"{YOU}"} for the <br /> atters that don’t <br /> need real YOU.
          </div>
          <p className="left-cont-subheading">
            Spend more time doing what matters.
          </p>
          <button
            className="left-cont-button"
            onClick={() => setOpenDialog(true)}
          >
            TELL ME MORE
          </button>
          <FormDialog open={openDialog} setOpenDialog={setOpenDialog} />
        </div>
        <div className="right-cont">
          <div className="large-image-container">

            <div className="video-box">
              <img src={videothumb} alt="ekai" className="thumbnail" />
              <ActionVedio />
              {/* <img src={play} className="play-icon" alt="Work Place Img" /> */}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
