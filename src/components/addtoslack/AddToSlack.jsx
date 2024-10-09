"use client";
import React, { useState } from "react";
import "./style.scss";
import { trackEvent } from "@/mixpanel";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GoArrowSwitch } from "react-icons/go";
import Link from "next/link";


export const AddToSlack = ({ isvisible, setIsVisible }) => {
    const [isConnected, setIsConnected] = useState(false);
    const handleConnectClick = () => {
        trackEvent("slack_connect");
        setIsConnected(true);
        window.open("https://app.yourekai.com/slack/install", "_blank");
      };
    
      const safetyPoints = [
        `Only the data that is manually entered into Ekai will be retained as your context. The stored information will be in vector embedding format rather than its original form.`,
        `In the pursuit of finding solutions, we may review your past discussions, which you have access to, in order to craft a reply. Rest assured, no data will be stored.`,
        `The context utilized to generate responses will be clearly displayed as the source. In cases where no source is provided, it indicates that personal context was not employed, and the response primarily originates from AI.`,
      ];
      const stuckedPoints = [
        <>
          {`Slack should open automatically on a new tab. If it doesn't,`}
          <Link
            href="https://app.yourekai.com/slack/install"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-500"
            onClick={() => trackEvent("slack_retry")}
          >
            click here to retry
          </Link>
          .
        </>,
        `If you are a Slack workspace administrator: Follow Slack’s instructions to connect.`,
        `If you are not authorized to install external apps: Follow the instructions to request access to the connection.`,
        <>
          Contact us:
          <Link
            href="https://mail.google.com/mail/u/0/?fs=1&to=gtmadmin@yourekai.com&tf=cm"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-500"
            onClick={() => trackEvent("contact_us_mail", { avenue: "Stack_popup" })}
          >
            gtmadmin@yourekai.com
          </Link>
        </>,
      ];

  if (!isvisible) return null;

  return(
  <div className="outerdiv w-full flex justify-center p-20">
    <div className="modal-content">
        {/* <CloseButton onClose={handleCloseModal} /> */}
        {isConnected ? (
          <ConnectedState stuckedPoints={stuckedPoints} />
        ) : (
          <NotConnectedState
            safetyPoints={safetyPoints}
            handleConnectClick={handleConnectClick}
          />
        )}
      </div>
    </div>);
};


function SlackIcon({ width = 24, height = 41, ...props }) {
    return (
      <svg
        width={width}
        height={height}
        {...props}
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
  }
  
  const EkaiLogo = ({ width = 24, height = 41, fill = "#C87A3C", ...props }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M20.4846 28.6623C19.1578 27.2967 17.5977 26.319 15.935 25.7276L20.48 21.0537C25.1662 16.2378 25.1662 8.42897 20.48 3.61309C15.7954 -1.20436 8.1993 -1.20436 3.51464 3.61309C-1.17155 8.42897 -1.17155 16.2378 3.51464 21.0537C4.80622 22.383 6.32022 23.3449 7.93392 23.9394L4.15736 28.052C3.93954 28.2475 3.72786 28.4494 3.52078 28.6623C2.83664 29.3656 2.25067 30.1335 1.76902 30.9456L5.20504 32.5383L8.0367 33.8487L8.4662 34.049C8.51375 33.9954 8.56131 33.9433 8.61039 33.8929C10.4833 31.9675 13.5221 31.9675 15.3965 33.8929C16.4611 34.9873 16.9197 36.4695 16.774 37.8966L23.4727 41C24.7321 36.777 23.735 31.9974 20.4862 28.6591L20.4846 28.6623ZM8.60272 15.8215C6.72978 13.8961 6.72978 10.7723 8.60272 8.84527C10.4757 6.91671 13.5144 6.91671 15.3889 8.84527C17.2649 10.7707 17.2649 13.8945 15.3889 15.8215L11.9973 19.5146V17.266C10.7686 17.266 9.53996 16.785 8.60425 15.8215H8.60272Z"
          fill={fill}
        />
      </svg>
    );
  };

  const ConnectedState = ({ stuckedPoints }) => (
    <div className="modal-content-inner">
      <LogoContainer />
      <h2 className="title">Follow instructions from Slack in your browser</h2>
      <div className="checkbox-list">
        <ul className="data-safety-list">
          {stuckedPoints.map((point, i) => {
            if (typeof point === "string")
              return (
                <li key={i} dangerouslySetInnerHTML={{ __html: point }}></li>
              );
            else return <li key={i}>{point}</li>;
          })}
        </ul>
      </div>
    </div>
  );
  
  const NotConnectedState = ({ safetyPoints, handleConnectClick }) => (
    <>
      <div className="modal-content-inner">
        <LogoContainer />
        <h2 className="title">Use slack conversation to create documents</h2>
      </div>
      {/* <div className="message-box">
        <span>Make a release plan from this thread</span>
      </div> */}
  
      <div className="checkbox-list">
        <div className="icon-text-container">
          <AiOutlineSafetyCertificate size={25} color="blue" />
          <h3 className="subtitle">Your data is safe</h3>
        </div>
  
        <ul className="data-safety-list">
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
      <EkaiLogo width={40} height={40} />
      <GoArrowSwitch size={35} color="gray" />
      <SlackIcon width={40} height={40} />
    </div>
  );






