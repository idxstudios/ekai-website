import React from "react";
import "./styles.scss";
import logo from "../../assets/ekai-logo.svg";
import workplaceImg from "../../assets/workplace-img-one.svg";

export const EkaiIntro = () => {
  return (
    <div className="ekai-intro-main-cont">
      <div className="ekai-intro-cont flex-row items-center">
        <div className="left-cont">
          <div className="logo-container flex-row items-center">
            <img src={logo} alt="Logo" />
            <span className="app-name">ekai</span>
          </div>
          <div className="left-cont-heading">
            Revolutionise Workplace Productivity
          </div>
          <p className="left-cont-subheading">
            Let AI work for you while you can focus on what is important
          </p>
          <button className="left-cont-button">I am interested !</button>
        </div>
        <div className="right-cont">
          <img src={workplaceImg} alt="Work Place Img" />
        </div>
      </div>
    </div>
  );
};
