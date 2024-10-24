// src/DataSecure.js
import React from "react";
import "./styles.scss";
import Invidia from "../../assets/nvdia.png";
import Image from "next/image";

const TechnologyPartner = () => {
  return (
    <main className="DataSecure-main Technology-main">
      <div className="DataSecure-container">
        <div className="DataSecure-item">
          <h2 className="font-bold text-center">Technology Partner</h2>
          <div className="icon">
            <Image
              loading="eager"
              priority={true}
              src={Invidia}
              style={{ objectFit: "contain", width: "320px", height: "180px" }}
              alt="nvidia"
            />
          </div>
          {/* <div className="text">
                        <h3>Flexible Deployment Options</h3>
                        <p>You have full ownership of your Data & your AI. Everything you share to your AI is strictly yours, and stays under your control.</p>
                    </div> */}
        </div>
      </div>
    </main>
  );
};

export default TechnologyPartner;
