import React, { useState, useEffect, useRef } from 'react';
import './styles.scss';
import row11 from "../../assets/animation/row-1-1.svg";
import row12 from "../../assets/animation/row-1-2.svg";
import row13 from "../../assets/animation/row-1-3.svg";
import row14 from "../../assets/animation/row-1-4.svg";
import row15 from "../../assets/animation/row-1-5.svg";
import logo from "../../assets/animation/ekai-logo.svg";
import row21 from "../../assets/animation/row-2-1.svg";
import row22 from "../../assets/animation/row-2-2.svg";
import row23 from "../../assets/animation/row-2-3.svg";
import row24 from "../../assets/animation/row-2-4.svg";
import row31 from "../../assets/animation/row-3-1.svg";
import row32 from "../../assets/animation/row-3-2.svg";
import row33 from "../../assets/animation/row-3-3.svg";

const Integration = () => {
  const [step, setStep] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timers = [
            setTimeout(() => setStep(1), 500),
            setTimeout(() => setStep(2), 1000),
            setTimeout(() => setStep(3), 1500),
            setTimeout(() => setStep(4), 2000),
            setTimeout(() => setStep(5), 2500),
          ];
          return () => timers.forEach(timer => clearTimeout(timer));
        }
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0.1, // Trigger when at least 10% of the component is visible
      }
    );

    const container = containerRef.current;
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  return (
    <div className="integration" ref={containerRef}>
      <div className={`top-icons ${step >= 1 ? 'visible' : ''}`}>
        <img className="icon-border" src={row11} alt="Icon 1" />
        <img className="icon-border" src={row12} alt="Icon 2" />
        <img className="icon-border" src={row13} alt="Icon 3" />
        <img className="icon-border" src={row14} alt="Icon 4" />
        <img className="icon-border" src={row15} alt="Icon 5" />
        <span className='hori'></span>
        <span className='verti1'></span>
        <span className='verti2'></span>
        <span className='verti3'></span>
      </div>
      <div className={`main-icon ${step >= 2 ? 'visible' : ''}`}>
        <img className="icon-border" src={logo} alt="Main Icon" />
      </div>
      <div className={`bottom-icons ${step >= 3 ? 'visible' : ''}`}>
        <img className="icon-border" src={row21} alt="Slack" />
        <img className="icon-border" src={row22} alt="Teams" />
        <img className="icon-border" src={row23} alt="Chrome" />
        <img className="icon-border" src={row24} alt="Others" />
        <span className='hori'></span>
        <span className='verti1'></span>
        <span className='verti2'></span>
        {/* <span className='verti3'></span> */}
        <span className='hori2'></span>
        <span className='verti12'></span>
        <span className='verti22'></span>
        {/* <span className='verti32'></span> */}
        <span className='verti42'></span>
      </div>
      <div className={`output ${step >= 4 ? 'visible' : ''}`}>
        <div className="output-icon">
          <img className="icon-border" src={row31} alt="Output 1" />
        </div>
        <div className="output-icon">
          <img className="icon-border" src={row32} alt="Output 2" />
        </div>
        <div className="output-icon">
          <img className="icon-border" src={row33} alt="Output 3" />
        </div>
      </div>
    </div>
  );
};

export default Integration;
