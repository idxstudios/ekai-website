// src/Footer.js
import React from 'react';
import './styles.scss';
import logo from "../../assets/ekai-logo.svg";
import Linkedin from "../../assets/linkedin.png";
import Insta from "../../assets/insta.png"
import FB from "../../assets/fb.png"
import Github from "../../assets/github.png"
import Top from "../../assets/top.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="logo">
          <img src={logo} alt="ekai logo" />
          <span>ekai</span>
        </div>
        <div className="social-media">
          <span>Follow Us</span>
          <div className="icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">   <img src={Linkedin} alt="ekai logo" /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">   <img src={Insta} alt="ekai logo" /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">   <img src={FB} alt="ekai logo" /></a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">   <img src={Github} alt="ekai logo" /></a>
          </div>
        </div>
        <div className="contact">
          <button>CONTACT US</button>
        </div>

      </div>
      <div className="back-to-top">
        <a href="#top">Back to top  <img src={Top} alt="ekai logo" /></a>
      </div>
      <div className='bottom-nav'>
        <a href="#top">Terms of Use</a> &#8226;
        <a href="#top">Privacy policy</a>
      </div>
    </footer>
  );
};

export default Footer;
