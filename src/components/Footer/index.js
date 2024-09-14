import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./styles.scss";
import logo from "../../assets/ekai-logo-footer.svg";
import { trackEvent } from "../../mixpanel";
// import Linkedin from "../../assets/linkedin.svg";
// import Gmail from "../../assets/gmail.svg";
// import Top from "../../assets/top.svg";

const Footer = () => {
  const location = useLocation();

  const handleContactUs = () => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    
    trackEvent("contact_us_mail", {'avenue':'footer'})

    if (isMobile) {
      // Mobile-specific logic
      window.location.href = "mailto:ekai@idxstudioz.com";

      console.log("Mobile device detected");
    } else {
      // Desktop-specific logic
      console.log("Desktop device detected");
      window.open(
        "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=ekai@idxstudioz.com",
        "_blank"
      );
    }
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">
          <img src={logo} alt="ekai logo" />
          {/* <span>ekai</span> */}
        </div>

        <div className="bottom-nav">
          <h4>Resources</h4>
          <Link onClick={() => trackEvent("faq_click")} to="/FAQs#top">FAQs</Link>
          <Link onClick={() => trackEvent("terms_use_click")} to="/termsOfUse#top">Terms of Use</Link>
          <Link onClick={() => trackEvent("privacy_policy_click")} to="/privacyPolicy#top">Privacy Policy</Link>
        </div>
        <div className="social-media">
          <h4>Contact Us</h4>
          <div className="icons">
            <a
              href="https://www.linkedin.com/company/ekai-0-1/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("linkedin_connect")}
            >
              
              <span>Linkedin</span>
            </a>

            <span
              onClick={handleContactUs}
              target="_blank"
              rel="noopener noreferrer"
            >
              Gmail
            </span>
          </div>
        </div>
      </div>
      {/* <div className="back-to-top">
        <a href="#top">
          Back to top <img src={Top} alt="ekai logo" />
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;
