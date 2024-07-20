// src/Footer.js
import React from 'react';
import './styles.scss';
import logo from "../../assets/ekai-logo.svg";
import Linkedin from "../../assets/linkedin.svg";
// import Insta from "../../assets/insta.png"
// import FB from "../../assets/fb.png"
// import Github from "../../assets/github.png"
import Gmail from "../../assets/gmail.svg"
import Top from "../../assets/top.svg"
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleContactUs = () => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Mobile-specific logic
      window.location.href = "mailto:ekai@idxstudioz.com"

      console.log('Mobile device detected');
    } else {
      // Desktop-specific logic
      console.log('Desktop device detected');
      window.open("https://mail.google.com/mail/u/0/?view=cm&fs=1&to=ekai@idxstudioz.com", '_blank');
    }

  }
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="logo">
          <img src={logo} alt="ekai logo" />
          <span>ekai</span>
        </div>

        <div className='bottom-nav'>
          <Link to="/FAQs">FAQs</Link>
          <Link to="/termsOfUse">Terms of Use</Link>
          <Link to="/privacyPolicy">Privacy Policy</Link>
        </div>
        <div className="social-media">
          <span>Follow Us</span>
          <div className="icons">
            <a href="https://www.linkedin.com/company/ekai-0-1/?viewAsMember=true" target="_blank" rel="noopener noreferrer">   <img src={Linkedin} alt="ekai logo" /></a>
            {/* <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">   <img src={Insta} alt="ekai logo" /></a> */}
            {/* <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">   <img src={FB} alt="ekai logo" /></a> */}
            <span onClick={handleContactUs} target="_blank" rel="noopener noreferrer">   <img src={Gmail} alt="ekai logo" /></span>
          </div>
        </div>
        {/* <div className="contact">
          <button onClick={handleContactUs}>CONTACT US</button>
        </div> */}

      </div>
      <div className="back-to-top">
        <a href="#top">Back to top  <img src={Top} alt="ekai logo" /></a>
      </div>

    </footer>
  );
};

export default Footer;