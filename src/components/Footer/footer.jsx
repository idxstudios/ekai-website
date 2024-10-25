"use client";

// import { useEffect } from "react";
import "./styles.scss";
import logo from "../../assets/ekai-logo-footer.svg";
import { trackEvent } from "@/mixpanel";
import Link from "next/link";
import Image from "next/image";

// import Linkedin from "../../assets/linkedin.svg";
// import Gmail from "../../assets/gmail.svg";
// import Top from "../../assets/top.svg";

const Footer = () => {
  //   const location = useLocation();

  const handleContactUs = () => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    trackEvent("contact_us_mail", { avenue: "footer" });

    if (isMobile) {
      // Mobile-specific logic
      window.location.href = "mailto:gtmadmin@yourekai.com";

      console.log("Mobile device detected");
    } else {
      // Desktop-specific logic
      console.log("Desktop device detected");
      window.open(
        "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=gtmadmin@yourekai.com",
        "_blank"
      );
    }
  };

  //   useEffect(() => {
  //     if (location.hash) {
  //       const element = document.getElementById(location.hash.substring(1));
  //       if (element) {
  //         element.scrollIntoView({ behavior: "smooth" });
  //       }
  //     }
  //   }, [location]);

  //   const { pathname, hash } = useLocation();

  //   useEffect(() => {
  //     if (hash === "#top") {
  //       window.scrollTo(0, 0); // Scroll to the top of the page
  //     }
  //   }, [pathname, hash]);
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">
          <Image loading="eager" priority={true} src={logo} alt="ekai logo" />
          {/* <span>ekai</span> */}
        </div>

        <div className="bottom-nav">
          <h4>Resources</h4>
          {/* <Link onClick={() => trackEvent("faq_click")} to="/FAQs#top">FAQs</Link> */}
          <Link href="/termsOfUse">
            <span onClick={() => trackEvent("terms_use_click")}>
              Terms of Use
            </span>
          </Link>
          <Link href="/privacyPolicy">
            <span onClick={() => trackEvent("privacy_policy_click")}>
              Privacy Policy
            </span>
          </Link>
          <Link href="/blogs">
            <span onClick={() => trackEvent("blogs_click")}>Blogs</span>
          </Link>
          <Link target="_blank" href="https://sphenoid-rhodium-e2a.notion.site/Customer-Onboarding-Document-126563cdf41d8072a083ead5cef71299">
            <span onClick={() => trackEvent("blogs_click")}>FAQs</span>
          </Link>
        </div>
        <div className="social-media">
          <h4>Contact Us</h4>
          <div className="icons">
            <a
              href="https://www.linkedin.com/company/ekai-0-1/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span onClick={() => trackEvent("linkedin_connect")}>
                Linkedin
              </span>
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
