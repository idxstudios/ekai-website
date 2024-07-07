import React from 'react';
import './styles.scss';
import ElevateCard from '../ElevateCard';

export default function ElevateYourWorkflow() {
    return (
        <div className='ElevateYourWorkflow'>
            <h1>Elevate Your Work flow with ekai</h1>


            {
                card.map((item) => {
                    return (
                        <ElevateCard id={item.id} title={item.title} reverse={item.isRev} para={item.para} key={item.id} />
                    )
                })
            }
        </div>
    )
}


const card = [
    {
        isRev: false,
        title: "Personal Branding Page",
        para: "Expose your AI twin outside of slack to expose what your external customers and stakeholders expect from you",
        id: 1
    },
    {
        isRev: true,
        title: "Intelligent Response",
        para: "Smart companion that manages routine queries, provides updates, and engages in discussions, all while keeping your tone and context.",
        id: 2
    }
    , {
        isRev: false,
        title: "Automated Document Generation",
        para: "Ekai generates comprehensive reports and documents from your existing knowledge base with ease.",
        id: 3
    },

]