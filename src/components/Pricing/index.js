import React, { useState } from "react";
import "./styles.scss";
import Square from "../../assets/CardSquare.svg";
import Check from "../../assets/CheckCircle.svg";
import Arrow from "../../assets/ArrowRight.svg";
import { FormDialog } from "../FormDialog";

// Refactored Card component to accept props
const Card = ({
  title,
  subtitle,
  description,
  originalPrice,
  discountedPrice,
  pricingInfo,
  trialInfo,
  buttonText,
  benefits,
}) => {

  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className="card enterprise">
      {/* <h3>{title}</h3> */}
      <div>
        <div className="card-header">
          <img src={Square} alt="Icon" className="card-icon" />
          <div>
            <h5>{subtitle}</h5>
            <h4>{title}</h4>
          </div>
        </div>{" "}
        <p>{description}</p>
        {benefits && (
          <ul>
            {benefits.map((benefit, index) => (
              <li key={index}>
                <img src={Check} alt="ekai" />
                {benefit}
              </li>
            ))}
          </ul>
        )}
        <div>
          {" "}
          {originalPrice && (
            <p className="pricing-info">
              <span className="original-price">{originalPrice}</span>
              <span className="discounted-price">{discountedPrice}</span>
            </p>
          )}{" "}
          <span className="pricingInfo">{pricingInfo}</span>
        </div>
      </div>

     <div className="makeitcenter">
     {trialInfo && <p className="trial-info">{trialInfo}</p>}
      <button className="contact-btn"
                    onClick={() => setOpenDialog(true)}

      >
        {buttonText} <img src={Arrow} alt="ekai" />
      </button>

      <FormDialog open={openDialog} setOpenDialog={setOpenDialog} />

     </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <div id="pricing" className="pricing-section">
      <h2>Pricing</h2>
      <div className="pricing-cards">
        {pricingCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;

const pricingCards = [
  {
    title: "Pilot",
    subtitle: "For individuals",
    description:
      "Ekai hosted plan ensures data protection and security on our cloud, not shared with other organizations.",
    originalPrice: "$25",
    discountedPrice: "$15",
    pricingInfo: "/user per month",
    trialInfo: "30 days free trial",
    buttonText: "Get started",
  },
  {
    title: "Pro",
    subtitle: "For individuals",
    description:
      "Self-hosted plan with one-click installation, freedom to choose cloud provider, and preferred LLM.",
    originalPrice: "$250",
    discountedPrice: "$100",
    pricingInfo: "/user annually",
    trialInfo: " ",
    buttonText: "Get started",
  },
  {
    title: "Enterprise",
    subtitle: "For big companies",
    description:
      "Includes all features from Pilot and Pro, with additional benefits:",
    benefits: [
      "Ability to upload company-level documents from webpages, Wiki, or PDFs to train Ekai with basic knowledge.",
      "Employee directory mapping.",
    ],
    trialInfo: " ",
    buttonText: "Contact us",
  },
];
