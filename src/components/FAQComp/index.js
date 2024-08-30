import React, { useState } from "react";
import "./style.scss";
import arrow from "../../assets/arrow.svg";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleDropdown = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <div className="dropdown">
      <h1>FAQs</h1>
      {content.map((item, index) => (
        <div key={index}>
          <div
            className="dropdown-header"
            onClick={() => toggleDropdown(index)}
          >
            <h2>{item.head}</h2>
            <span className={`arrow ${isOpen === index ? "up" : "down"}`}>
              <img src={arrow} alt="" />
            </span>
          </div>
          {isOpen === index && (
            <>
              <p className="dropdown-content">
                {item.para.split(' ').map((word, i) => (
                  word.includes('https://') ? (
                    <a key={i} href={word} target="_blank" rel="noopener noreferrer">
                      {word}
                    </a>
                  ) : (
                    <React.Fragment key={i}>{word} </React.Fragment>
                  )
                ))}
              </p>
              {item.list && (
                <ul>
                  {item.list.map((listItem, listIndex) => (
                    <li key={listIndex}>{listItem.li}</li>
                  ))}
                </ul>
              )}
            </>
          )}
            <hr />
        </div>
      ))}

    

    </div>
  );
};

export default Dropdown;

const content = [
  {
    head: "What is Ekai?",
    para: "Ekai is your digital twin that handles trivial and repetitive workplace queries for you. It also helps you search your knowledge base, manage meetings, and more.",
  },
  {
    head: "How can Ekai help me or my team?",
    para: "",
    list: [
      {
        li: "Responds to routine queries on your behalf, freeing up your focus hours.",
      },
      {
        li: "Facilitates collaboration across different time zones.",
      },
      {
        li: "Manages your calendar, schedules meetings, and checks availability within Slack.",
      },
    ],
  },
  {
    head: "How do I add Ekai to Slack?",
    para: "Install via this link https://app.ekai.ca/slack/install . If workplace policies restrict app installations, request permission from your Slack administrator.",
  },
  {
    head: "How do I use Ekai on the first day?",
    para: "",
    list: [
      {
        li: "Activate Ekai using the 'Activate' button.",
      },
      {
        li: "Interact through the Ekai Direct Message (DM) page.",
      },
      {
        li: "Add Ekai to any Slack channel; it will only respond when it knows the answer.",
      },
      {
        li: "Optionally, authorize Google Drive and Google Calendar for enhanced functionality.",
      },
    ],
  },
  {
    head: "How can I make Ekai more powerful?",
    para: "",
    list: [
      {
        li: "Local Documents: Upload PDFs, text files, and Doc files.",
      },
      {
        li: "Google Drive: Connect and select documents for training.",
      },
      {
        li: "Google Drive Links: Use links to train Ekai with specific documents.",
      },
      {
        li: "Slack Messages: Utilize existing messages for training.",
      },
      {
        li: "Plain Text: Add information directly via the train from text option.",
      },
      {
        li: "Calendar Integration: Sync your calendar for intelligent scheduling assistance.",
      },
    ],
  },
  {
    head: "Is my enterprise data safe with Ekai?",
    para: "",
    list: [
      {
        li: "Data Encryption: Your data is secured with AES-256 encryption and kept separate from others.",
      },
      {
        li: "Data Access: Only you and your AI can access your data.",
      },
      {
        li: "Flexible Deployment option: Full ownership and control of your data and AI.",
      },
    ],
  },
  {
    head: "How do I stop Ekai from responding on my behalf?",
    para: "",
    list: [
      {
        li: "Use the 'Deactivate' button on the Ekai app's home page.",
      },
      {
        li: "To use Ekai personally, remove the app from your channels to prevent it from responding on anyone's behalf.",
      },
    ],
  },
];