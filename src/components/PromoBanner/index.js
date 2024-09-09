import React, { useState, useEffect } from 'react';
import './styles.scss';
import { FormDialog } from '../FormDialog';
import Arrow from "../../assets/ArrowRight.svg";


const PromoBanner = () => {
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
    <div className="promo-banner">
      <p>
      Transform workplace communication with ekai <br/> — your secure AI twin for unmatched <br/> productivity and seamless collaboration.
      </p>
      <button
        className="left-cont-button tell-me-more-btn"
        onClick={() => setOpenDialog(true)}
      >
        Get Started <img src={Arrow} alt="ekai" />
      </button>
      <FormDialog open={openDialog} setOpenDialog={setOpenDialog} />
    </div>
  );
};

export default PromoBanner;
