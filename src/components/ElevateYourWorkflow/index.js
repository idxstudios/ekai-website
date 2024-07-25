import React from 'react';
import './styles.scss';
import ElevateCard from '../ElevateCard';
import GIF1 from "../../assets/cardsGif/GIF1.gif";
import GIF2 from "../../assets/cardsGif/GIF2.gif";
import GIF3 from "../../assets/cardsGif/GIF3.gif"; // Fixed the filename for GIF3

export default function ElevateYourWorkflow() {
    // Debugging: Check if card data is loaded
    console.log("Card Data:", card);

    return (
        <div className='ElevateYourWorkflow'>
            <h1>Reimagine your workday with Ekai</h1>

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
        title: "Always ON, Always YOU",
        para: "Smart companion that manages routine queries, provides updates, and engages in discussions, all while keeping your tone and context.",
        id: 1
    },
    {
        isRev: true,
        gifSrc: GIF2,
        title: "External Communication",
        para: "Expose your AI twin outside of slack to expose what your external customers and stakeholders expect from you",
        id: 2
    },
    {
        isRev: false,
        gifSrc: GIF3,
        title: "1 click Document Generation",
        para: "Ekai generates comprehensive reports and documents from your existing knowledge base with ease.",
        id: 3
    },
]
