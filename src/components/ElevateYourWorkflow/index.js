import React from "react";
import "./styles.scss";
import ElevateCard from "../ElevateCard";
// import GIF1 from "../../assets/cardsGif/GIF1.gif";
// import GIF2 from "../../assets/cardsGif/GIF2.gif";
// import GIF3 from "../../assets/cardsGif/GIF3.gif";
import GIF1 from "../../assets/cardsGif/ekaiGPT.gif";
import GIF2 from "../../assets/cardsGif/autoreply.gif";
import GIF3 from "../../assets/cardsGif/learn.png";
import GIF4 from "../../assets/cardsGif/create.png";

export default function ElevateYourWorkflow() {
  // Debugging: Check if card data is loaded
  console.log("Card Data:", card);

  return (
    <div className="ElevateYourWorkflow">
      {/* <h1>Reimagine your workday with Ekai</h1> */}

      {card?.map((item) => {
        return (
          <ElevateCard
            id={item.id}
            gifSrc={item.gifSrc}
            title={item.title}
            reverse={item.isRev}
            para={item.para}
            key={item.id}
            category={item.category}
          />
        );
      })}
    </div>
  );
}

const card = [
  {
    isRev: true,
    gifSrc: GIF1,
    category: "Ask",
    title: "/ekai anything, anywhere",
    para: "ekaiGPT harnesses the power of LLMs and your specialized knowledge, all while ensuring it remains Private & Secure.",
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
  //   {
  //     isRev: true,
  //     gifSrc: GIF2,
  //     title: "Cross platform",
  //     para: "Integrations with top platforms like Atlassian/Jira, Notion, Google, Slack, Salesforce, GitHub, etc. You now have the flexibility to work in your preferred workspace.",
  //     id: 2,
  //   },
  //   {
  //     isRev: false,
  //     gifSrc: GIF3,
  //     title: "Compliant & Contextual LLM",
  //     para: "Unlock the potential of Generative AI while safeguarding your data privacy. One click to host it on your chosen VPC. Ekai securely learns by combining insights from different sources, providing your team with a personalized language model tailored to their context..",
  //     id: 3,
  //   },
];
