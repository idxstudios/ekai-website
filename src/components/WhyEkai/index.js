import React from "react";
import "./styles.scss";
import whyekai from "../../assets/wkyekai.svg";

export const WhyEkai = () => {
  return (
    <div className="why-ekai-cont">
      <div className="absolute">
        <img src={whyekai} alt="Why Ekai Img" />
      </div>
      <div>
        <div className="why-ekai-cont-head">Why we are building Ekai</div>
        <p className="why-ekai-para mt-40 mb-40">
          We imagine a world where individuals amplify their impact by
          minimising repetitive tasks and enhancing creative thinking, powered
          by AI agents.
        </p>
        <p className="why-ekai-para">
          Gen AI offers a unique opportunity to actualise this vision,
          leveraging its ability to learn from structured and unstructured data
          to empower personalised agents that work on your behalf.
        </p>
      </div>
    </div>
  );
};
