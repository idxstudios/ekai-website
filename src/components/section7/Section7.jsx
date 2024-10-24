// src/DataSecure.js
"use client";
import React from "react";
import "./style.scss";
import lock from "../../assets/security/lock.svg";
import Img1 from "../../assets/security/enc.svg";
import Img2 from "../../assets/security/db.svg";
import Img3 from "../../assets/security/cloud.svg";
import Image from "next/image";

const Card = ({ title, icon, description }) => {
  return (
    <div className="card-secure">
      <Image
        loading="eager"
        priority={true}
        src={icon}
        alt={title}
        className="card-icon"
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Section7 = () => {
  const cardsArray = [
    {
      title: "Data Encryption",
      icon: Img1,
      description:
        "We use a multi-tenant deployment model with isolated resources for each tenant. Data in transit is encrypted using TLS, while AES-256 ensures data encryption at rest. Keys are managed and rotated through a secure key vault.",
    },
    {
      title: "Access Control",
      icon: Img2,
      description:
        "We enforce original access permissions to ensure that users can only query the information they’re authorized to see. Rest easy knowing your data is fully protected from unauthorized access at all times",
    },
    {
      title: "Private Deployment",
      icon: Img3,
      description:
        "Enjoy full flexibility by deploying our solution on your private infrastructure, giving you complete control over your data and environment. Tailor the deployment to meet your specific security and compliance requirements.",
    },
  ];

  return (
    <main className="DataSecure-main">
      <div className="DataSecure-upper">
        <Image loading="eager" priority={true} src={lock} alt="ekai" />
        <p>
          We help keep your <br /> data secure & private
        </p>
      </div>
      <div className="three-cards">
        {cardsArray.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            icon={card.icon}
            description={card.description}
          />
        ))}
      </div>
    </main>
  );
};

export default Section7;
