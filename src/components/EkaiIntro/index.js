import React, { useEffect, useState } from "react";
import "./styles.scss";
import play from "../../assets/play.svg";
// import workplaceImg from "../../assets/workplace-img-one.svg";
// import workplaceGirl from "../../assets/workplace-img-girl.svg";
import { FormDialog } from "../FormDialog";

export const EkaiIntro = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ekai-intro-main-cont">
      <div className="ekai-intro-cont flex-row items-center">
        <div className="left-cont">

          <div className="left-cont-heading">
            Clone yourself, <br />
            skip the mundane
          </div>
          <p className="left-cont-subheading">
            Enhance communication and collaboration <br /> across your organization.
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
              <img src={play} className="play-icon" alt="Work Place Img" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
