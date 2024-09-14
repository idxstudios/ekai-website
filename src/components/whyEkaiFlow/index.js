import React from "react";
import "./styles.scss";
import ElevateCard from "../ElevateCard";
import GIF1 from "../../assets/whyEkai/realtime.png";
import GIF2 from "../../assets/compl.png";
import video from "../../assets/whyEkai/crossplatform.mp4";
import { WhyEkai } from "../WhyEkai";

export default function WhyEkaiFlow() {
  // Debugging: Check if card data is loaded
  console.log("Card Data:", card);

  return (
    <div className="ElevateYourWorkflow">
      {/* <h1>Reimagine your workday with Ekai</h1> */}
      <WhyEkai />

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
    isRev: false,
    gifSrc: GIF1,
    title: "Real-Time Updates",
    para: "Ekai consolidates structured data and unstructured discussions from platforms like Slack and meetings. This guarantees that the information you access is always current and mirrors the latest conversations.",
    id: 1,
  },
  {
    isRev: true,
    gifSrc: video,
    title: "Cross-Platform Access",
    para: "Ekai is accessible on various platforms. Users can leverage Ekai's contextual comprehension and AI features across different environments such as Slack, Chrome extensions, mobile keyboards, emails, desktop app etc",
    id: 2,
  },
  {
    isRev: false,
    gifSrc: GIF2,
    title: "Security and Compliance",
    para: "Ekai adheres to security protocols. You can securely employ AI capabilities by hosting knowledge and AI models on either your servers or Ekai's secure servers. Your data is safeguarded and not utilized for training AI models.",
    id: 3,
  },
];
