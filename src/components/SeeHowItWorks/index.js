import React, { useState, useEffect } from 'react';
import './styles.scss';

const Integration = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 500),
      setTimeout(() => setStep(2), 1000),
      setTimeout(() => setStep(3), 1500),
      setTimeout(() => setStep(4), 2000),
      setTimeout(() => setStep(5), 2500),
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <div className="integration">
      <div className={`top-icons ${step >= 1 ? 'visible' : ''}`}>
        <img src="path/to/icon1.png" alt="Icon 1" />
        <img src="path/to/icon2.png" alt="Icon 2" />
        <img src="path/to/icon3.png" alt="Icon 3" />
        <img src="path/to/icon4.png" alt="Icon 4" />
        <img src="path/to/icon5.png" alt="Icon 5" />
      </div>
      <div className={`main-icon ${step >= 2 ? 'visible' : ''}`}>
        <img src="path/to/main-icon.png" alt="Main Icon" />
      </div>
      <div className={`bottom-icons ${step >= 3 ? 'visible' : ''}`}>
        <img src="path/to/slack.png" alt="Slack" />
        <img src="path/to/teams.png" alt="Teams" />
        <img src="path/to/chrome.png" alt="Chrome" />
        <img src="path/to/others.png" alt="Others" />
      </div>
      <div className={`output ${step >= 4 ? 'visible' : ''}`}>
        <div className="output-icon">
          <img src="path/to/output1.png" alt="Output 1" />
        </div>
        <div className="output-icon">
          <img src="path/to/output2.png" alt="Output 2" />
        </div>
        <div className="output-icon">
          <img src="path/to/output3.png" alt="Output 3" />
        </div>
      </div>
    </div>
  );
};

export default Integration;
