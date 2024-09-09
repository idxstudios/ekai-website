// src/DataSecure.js
import React from 'react';
import './styles.scss';
import Invidia from "../../assets/nvidia-inception-logo.jpg";

const TechnologyPartner = () => {
    return (
        <main className='DataSecure-main Technology-main'>
    
            <div className="DataSecure-container">

                <div className="DataSecure-item">
                <h1>Technology Partner</h1>
                    <div className="icon">
                        <img src={Invidia} style={{ objectFit: "contain", width: "300px", height:"80px" }} alt='' />
                    </div>
                    {/* <div className="text">
                        <h3>Flexible Deployment Options</h3>
                        <p>You have full ownership of your Data & your AI. Everything you share to your AI is strictly yours, and stays under your control.</p>
                    </div> */}
                </div>
            </div>
        </main>
    );
};

export default TechnologyPartner;
