"use client";
import React, { useEffect, useState } from "react";
import GIF1 from "../../assets/cardsGif/ekaiGPT.gif";
import GIF2 from "../../assets/cardsGif/autoreply.gif";
import GIF3 from "../../assets/cardsGif/learn.svg";
import GIF4 from "../../assets/cardsGif/create.svg";
import { throttle } from "lodash";
import Image from "next/image";
import './style.scss';

const card = [
  {
    isRev: true,
    gifSrc: GIF1,
    category: "Ask",
    title: "/ekai anything, anywhere",
    para: "ekaiGPT harnesses the power of LLMs and your specialized knowledge, all while ensuring it remains Private & Secure.",
    id: 1,
  },
  {
    isRev: true,
    gifSrc: GIF2,
    category: "Compose",
    title: "Tailored response that sounds just like you",
    para: "Your AI twin automatically crafts answers to routine queries, provides updates, and engages in discussions, all while keeping your tone and context.",
    id: 2,
  },
  {
    isRev: true,
    gifSrc: GIF3,
    category: "Learn",
    title: "Synchronize scattered information seamlessly",
    para: "Ekai becomes smarter every time you add articles, documents, and meeting notes to its knowledge base.",
    id: 3,
  },
  {
    isRev: true,
    gifSrc: GIF4,
    category: "Create",
    title: "Feeling anxious about writing a report?",
    para: "Ekai initiates writing documents for you by pulling context from Slack, meetings, and other data sources.",
    id: 4,
  },
];

const getCategoryColor = (category) => {
  switch (category) {
    case "Ask":
      return "rgba(79, 71, 137, 1)";
    case "Compose":
      return "rgba(129, 170, 95, 1)";
    case "Learn":
      return "rgba(200, 122, 60, 1)";
    case "Create":
      return "rgba(200, 181, 64, 1)";
    default:
      return "#000";
  }
};
const Section3 = () => {
  const [activeSection, setActiveSection] = useState(card[0]);

  const handleScroll = throttle(() => {
    const sectionElements = document.querySelectorAll(".section");
    sectionElements.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        setActiveSection(card[index]);
      }
    });
  }, 200); // Increase the throttle delay to 200ms

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  return (
    <div className="sticky-animation-container ">
      <div className="sticky-section">
        <Image
          key={activeSection.id}
          src={activeSection?.gifSrc}
          alt={activeSection?.title}
        />
      </div>
      <div className="scrollable-content">
        {card.map((section) => (
          <div key={section.id} className="section">
            <h4 style={{ color: getCategoryColor(section.category) }}>
              {section.category}
            </h4>
            <h2>{section.title}</h2>
            <p>{section.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
