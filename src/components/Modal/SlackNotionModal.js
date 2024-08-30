import React, { useState } from "react";
import "./SlackNotionModal.scss";
import logo from "../../assets/ekai-logo.svg";

export const SlackNotionModal = ({ onClose }) => {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnectClick = () => {
    setIsConnected(true);
    window.open("https://app.ekai.ca/slack/install", "_blank"); // Open link in a new tab
  };

  const safetyPoints = [
    "Only the data that is manually entered into Ekai will be retained as your context. The stored information will be in vector embedding format rather than its original form.",
    "In the pursuit of finding solutions, we may review your past discussions, which you have access to, in order to craft a reply. Rest assured, no data will be stored.",
    "OpenAI asserts that the data we provide is not utilized for training their model.",
    "The context utilized to generate responses will be clearly displayed as the source. In cases where no source is provided, it indicates that personal context was not employed, and the response primarily originates from OpenAI.",
  ];

  const stuckedPoints = [
    "Slack should open automatically on a new tab. If it doesn't, <a href='#'>click here to retry</a>.",
    "If you are a Slack workspace administrator: Follow Slack’s instructions to connect.",
    "If you are not authorized to install external apps: Follow the instructions to request access to the connection.",
  ];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <CloseButton onClose={onClose} />
        {isConnected ? (
          <ConnectedState stuckedPoints={stuckedPoints} />
        ) : (
          <NotConnectedState
            safetyPoints={safetyPoints}
            handleConnectClick={handleConnectClick}
          />
        )}
      </div>
    </div>
  );
};

const CloseButton = ({ onClose }) => (
  <button onClick={onClose} className="close-button">
    &times;
  </button>
);

const SlackIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ height: "40px", width: "40px" }}
    viewBox="0 0 122.8 122.8"
  >
    <path
      d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z"
      fill="#e01e5a"
    ></path>
    <path
      d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z"
      fill="#36c5f0"
    ></path>
    <path
      d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z"
      fill="#2eb67d"
    ></path>
    <path
      d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z"
      fill="#ecb22e"
    ></path>
  </svg>
);

const ConnectedState = ({ stuckedPoints }) => (
  <div className="modal-content-inner">
    <LogoContainer />
    <h2 className="modal-title">
      Follow instructions from Slack in your browser
    </h2>
    <div className="checkbox-list">
      <ul>
        {stuckedPoints.map((point, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: point }}></li>
        ))}
      </ul>
    </div>
    <div className="contact-info">
      Contact us: <a href="#">ekai@idxstudioz.com</a>
    </div>
  </div>
);

const NotConnectedState = ({ safetyPoints, handleConnectClick }) => (
  <>
    <div className="modal-content-inner">
      <LogoContainer />
      <h2 className="modal-title">
        Structurally retrieve information from unstructured information
      </h2>
    </div>
    <div className="message-box">
      <span className="font-semibold">
        Make a release plan from this thread
      </span>
    </div>
    <div className="checkbox-list">
      <div className="checkbox-container">
        <input type="checkbox" checked readOnly />
        <span>Your data is safe:</span>
      </div>
      <ul>
        {safetyPoints.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
    <button onClick={handleConnectClick} className="connect-button">
      Connect
    </button>
  </>
);

const LogoContainer = () => (
  <div className="logo-container">
    <img src={logo} alt="Logo" />
    <span>↔️</span>
    <SlackIcon />
  </div>
);
