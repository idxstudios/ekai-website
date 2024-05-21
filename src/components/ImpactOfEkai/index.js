import React from "react";
import "./styles.scss";
import chat from "../../assets/chat.svg";
import docs from "../../assets/docs.svg";
import ooo from "../../assets/ooo.svg";
import timelines from "../../assets/timelines.svg";

export const ImpactOfEkai = () => {
  return (
    <div className="impact-of-ekai-cont">
      <h2 className="ekai-cont-head">Impact Ekai can make</h2>
      <h3 className="ekai-cont-sub-head">Add hours for critical thinking</h3>
      <div className="flex-row flex-container">
        <div className="imapct-ekai-card">
          <div className="img-container">
            <img src={chat} alt="Chat Img" />
          </div>
          <p>
            Automatically identify and respond to trivial and repetitive
            inquiries across multiple platforms on your behalf
          </p>
        </div>
        <div className="imapct-ekai-card">
          <div className="img-container">
            <img src={docs} alt="Docs Img" />
          </div>
          <p>
            Effortlessly creates structured documents from the unstructured data
            around you, guided by simple instructions
          </p>
        </div>
      </div>
      <h3 className="ekai-cont-sub-head mt-112">
        Reduce blockers for faster decision making
      </h3>
      <div className="flex-row flex-container">
        <div className="imapct-ekai-card">
          <div className="img-container">
            <img src={ooo} alt="Chat Img" />
          </div>
          <p>
            Obtain a prompt response to your query, even if the person is
            currently occupied with other tasks or meetings
          </p>
        </div>
        <div className="imapct-ekai-card">
          <div className="img-container">
            <img src={timelines} alt="Docs Img" />
          </div>
          <p>
            Enable collaboration with teams in different time zones, ensuring
            seamless communication even when they are offline or sleeping.
          </p>
        </div>
      </div>
    </div>
  );
};
