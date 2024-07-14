import React, { useState, useEffect } from 'react';
import './styles.scss';
import { FormDialog } from '../FormDialog';

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
        Experience the future of productivity and creativity with Gen AI. Your personal AI helper is here to make your life easier and more productive.
      </p>
      <button
        className="left-cont-button tell-me-more-btn"
        onClick={() => setOpenDialog(true)}
      >
        TELL ME MORE
      </button>
      <FormDialog open={openDialog} setOpenDialog={setOpenDialog} />
    </div>
  );
};

export default PromoBanner;
