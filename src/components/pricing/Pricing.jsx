"use client"
import React,{useState} from "react";
import "./styles.scss";
import Square from "../../assets/CardSquare.svg";
import CardSquarePaperPlane from "../../assets/CardSquarePaperPlane.svg";
import Check from "../../assets/CheckCircle.svg";
import Arrow from "../../assets/ArrowRight.svg";

import Image from "next/image";
import Contactus from "../contactus/Contactus";

// Refactored Card component to accept props
const Card = ({
  icon,
  title,
  subtitle,
  description,
  originalPrice,
  discountedPrice,
  pricingInfo,
  trialInfo,
  buttonText,
  benefits,
  fun,
  setOpen,
}) => {
  
  function handleGetStarted(){
    if (fun === 1) {
      setOpen(true);
    } else if(
      fun===2
    ){
      setOpen(true);
    }
    else if(fun===3){
      setOpen(true);
    }
  }

//   const handleGetStarted = () => {
//     setOpenDialog(true);
//   };

  return (
    <>
    <div className="card enterprise">
      {/* <h3>{title}</h3> */}
      <div>
        <div className="card-header">
          <Image src={icon} alt="Icon" className="card-icon" />
          <div>
            <h4 className="font-bold flex items-center justify-center mb-0 h-full">{title}</h4>
          </div>
        </div>
        <p>{description}</p>
        {benefits && (
          <ul>
            {benefits.map((benefit, index) => (
              <li className="mb-2" key={index}>
                <Image width={26} height={26} src={Check} alt="ekai" />
                {benefit}
              </li>
            ))}
          </ul>
        )}
        <div>
          {" "}
          {originalPrice && (
            <p className="pricing-info">
              <span className="discounted-price">{originalPrice}</span>
              {/* <span className="discounted-price">{discountedPrice}</span> */}
            </p>
          )}{" "}
          <span className="pricingInfo">{pricingInfo}</span>
        </div>
      </div>

      <div className="makeitcenter">
        {trialInfo && <p className="trial-info">{trialInfo}</p>}
        <button className="contact-btn" 
        onClick={() => handleGetStarted()}
        >
          {buttonText} <Image src={Arrow} alt="ekai" />
        </button>
      </div>
      
      {/* <FormDialog open={openDialog} setOpenDialog={setOpenDialog} /> */}
    </div>
    
      </>
  );
};

const Pricing = () => {
  const [open, setOpen]= useState(false)
  
  return (
    <>
    <div className="pricing-section">
      <h2>Pricing</h2>
      <div className="pricing-cards">
        {pricingCards.map((card, index) => (
          <Card key={index} {...card} setOpen={setOpen} />
        ))}
      </div>
    </div>
    <Contactus  isvisible={open} setIsVisible={()=>setOpen(false)}/>
    </>
  );
};

export default Pricing;

const pricingCards = [
  {
    icon: Square,
    title: "Pilot",
    description:
      "Ekai hosted plan ensures data protection and security on our cloud, not shared with other organizations.",
    originalPrice: "$25",
    discountedPrice: "$15",
    pricingInfo: "/user per month",
    trialInfo: "30 days free trial",
    buttonText: "Get started",
    fun: 1,
  },
  {
    icon: Square,
    title: "Pro",
    description:
      "Self-hosted plan with one-click installation, freedom to choose cloud provider, and preferred LLM.",
    originalPrice: "$250",
    discountedPrice: "$100",
    pricingInfo: "/user annually",
    trialInfo: " ",
    buttonText: "Get started",
    fun: 2,
  },
  {
    icon: CardSquarePaperPlane,
    title: "Enterprise",
    description:
      "Includes all features from Pilot and Pro, with additional benefits:",
    benefits: [
      "Ability to upload company-level documents from webpages, Wiki, or PDFs to train Ekai with basic knowledge.",
      "Employee directory mapping.", "Admin Support & Maintenance included"
    ],
    trialInfo: " ",
    buttonText: "Contact us",
    fun: 3,
  },
];
