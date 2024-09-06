// src/DataSecure.js
import React from 'react';
import './styles.scss';
import lock from "../../assets/security/lock.svg";
import Img1 from "../../assets/security/enc.svg"
import Img2 from "../../assets/security/db.svg"
import Img3 from "../../assets/security/cloud.svg"

const Card = ({ title, icon, description }) => {
  return (
    <div className='card-secure'>
      <img src={icon} alt={title} className="card-icon" /> 
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const DataSecurity = () => {
  const cardsArray = [
    {
      title: "Data Encryption",
      icon: Img1,
      description:
        "Your Data is never mixed with other users. Each user gets their own entirely separate Vector Database and your Data is secured with AES-256 military-grade encryption.",
    },
    {
      title: "Access Control",
      icon: Img2,
      description:
        "We follow original access permission around the information so everyone can only query what's meant for them. Giving you peace of mind that no information will ever be leaked to an unauthorized source.",
    },
    {
      title: "Private Deployment",
      icon: Img3,
      description:
        "You have full ownership of your Data & your AI. Everything you share to your AI is strictly yours, and stays under your control. Your Data will never be used by us or by anyone.",
    },
  ];

  return (
    <main className='DataSecure-main'>
      <div className='DataSecure-upper'>
        <img src={lock} alt='ekai' />
        <p>We help keep your <br /> data secure & private</p>
      </div>
      <div className='three-cards'>
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

export default DataSecurity;
