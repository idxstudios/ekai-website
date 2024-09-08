import React from 'react';
import './styles.scss';
import ElevateCard from '../ElevateCard';
// import GIF1 from "../../assets/cardsGif/GIF1.gif";
// import GIF2 from "../../assets/cardsGif/GIF2.gif";
// import GIF3 from "../../assets/cardsGif/GIF3.gif";
import GIF1 from "../../assets/cardsGif/img1.png";
import GIF2 from "../../assets/cardsGif/img2.png";
import GIF3 from "../../assets/cardsGif/img3.png";

export default function ElevateYourWorkflow() {
    // Debugging: Check if card data is loaded
    console.log("Card Data:", card);

    return (
        <div className='ElevateYourWorkflow'>
            {/* <h1>Reimagine your workday with Ekai</h1> */}

            {
                card?.map((item) => {
                    return (
                        <ElevateCard 
                            id={item.id} 
                            gifSrc={item.gifSrc} 
                            title={item.title} 
                            reverse={item.isRev} 
                            para={item.para} 
                            key={item.id} 
                        />
                    )
                })
            }
        </div>
    )
}

const card = [
    {
        isRev: false,
        gifSrc: GIF1,
        title: "/ekai anything, anywhere",
        para: "ekaiGPT harnesses the power of LLMs and your specialized knowledge, all while ensuring it remains Private & Secure.",
        id: 1
    },
    {
        isRev: true,
        gifSrc: GIF2,
        title: "Cross platform",
        para: "Integrations with top platforms like Atlassian/Jira, Notion, Google, Slack, Salesforce, GitHub, etc. You now have the flexibility to work in your preferred workspace.",
        id: 2
    },
    {
        isRev: false,
        gifSrc: GIF3,
        title: "Compliant & Contextual LLM",
        para: "Unlock the potential of Generative AI while safeguarding your data privacy. One click to host it on your chosen VPC. Ekai securely learns by combining insights from different sources, providing your team with a personalized language model tailored to their context..",
        id: 3
    },
]
