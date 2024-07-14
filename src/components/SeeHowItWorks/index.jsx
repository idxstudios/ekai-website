import React from "react";
import "./styles.scss";
import row11 from "../../assets/animation/row-1-1.svg";
import row12 from "../../assets/animation/row-1-2.svg";
import row13 from "../../assets/animation/row-1-3.svg";
import row14 from "../../assets/animation/row-1-4.svg";
import row15 from "../../assets/animation/row-1-5.svg";
import line1 from "../../assets/animation/line1.svg";
import line2 from "../../assets/animation/line2.svg";
import line3 from "../../assets/animation/line3.svg";
import line4 from "../../assets/animation/line4.svg";
import line5 from "../../assets/animation/line5.svg";
import logo from "../../assets/animation/ekai-logo.svg";
import line21 from "../../assets/animation/line21.svg";
import line22 from "../../assets/animation/line22.svg";
import line23 from "../../assets/animation/line23.svg";
import line24 from "../../assets/animation/line24.svg";
import row21 from "../../assets/animation/row-2-1.svg";
import row22 from "../../assets/animation/row-2-2.svg";
import row23 from "../../assets/animation/row-2-3.svg";
import row24 from "../../assets/animation/row-2-4.svg";
import row31 from "../../assets/animation/row-3-1.svg";
import row32 from "../../assets/animation/row-3-2.svg";
import row33 from "../../assets/animation/row-3-3.svg";

const Integration = () => {
  return (
    <div className="integration-main">     <h1>See how it works!</h1>
    <div className="integration">
 
      <div className="top-icons">
        <div className="icon-border icon-border1">
          <img src={row11} alt="Icon 1" />
        </div>
        <div className="icon-border icon-border2">
          <img src={row12} alt="Icon 2" />
        </div>
        <div className="icon-border icon-border3">
          <img src={row13} alt="Icon 3" />
        </div>
        <div className="icon-border icon-border4">
          <img src={row14} alt="Icon 4" />
        </div>
        <div className="icon-border icon-border5">
          <img src={row15} alt="Icon 5" />
        </div>
      </div>
      <div>
        {/* --------------------- */}
        <div className="row1-border">
          <img src={line1} alt="Icon 1" />
        </div>
        <div className="row2-border">
          <img src={line2} alt="Icon 1" />
        </div>
        <div className="row3-border">
          <img src={line3} alt="Icon 1" />
        </div>
        <div className="row4-border">
          <img src={line4} alt="Icon 1" />
        </div>
        <div className="row5-border">
          <img src={line5} alt="Icon 1" />
        </div>
      </div>
      <div className="middle-logo">
        <img src={logo} alt="Icon 2" />
      </div>
      <div className="row-2-line">
        {/* --------------------- */}
        <div className="row21-border">
          <img src={line21} alt="Icon 1" />
        </div>
        <div className="row22-border">
          <img src={line22} alt="Icon 1" />
        </div>
        <div className="row23-border">
          <img src={line23} alt="Icon 1" />
        </div>
        <div className="row24-border">
          <img src={line24} alt="Icon 1" />
        </div>
      </div>
      <div className="row-2-2">
        <div className="row21-border">
          <img src={row21} alt="Icon 1" />
        </div>
        <div className="row22-border">
          <img src={row22} alt="Icon 1" />
        </div>
        <div className="row23-border">
          <img src={row23} alt="Icon 1" />
        </div>
        <div className="row24-border">
          <img src={row24} alt="Icon 1" />
        </div>
      </div>
      <div className="icon-row-2-border">
        {/* --------------------- */}
        <div className="row21-border">
          <img src={line1} alt="Icon 1" />
        </div>
        <div className="row22-border">
          <img src={line2} alt="Icon 1" />
        </div>
        <div className="row23-border">
          <img src={line3} alt="Icon 1" />
        </div>
        <div className="row24-border">
          <img src={line4} alt="Icon 1" />
        </div>
        <div className="row25-border">
          <img src={line5} alt="Icon 1" />
        </div>
      </div>
      {/* ------------------- */}
      <div className="last-div">
        <div className="row31">
          <img src={row31} alt="Icon 1" />
        </div>
        <div className="row32">
          <img src={row32} alt="Icon 1" />
        </div>
        <div className="row33">
          <img src={row33} alt="Icon 1" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Integration;
