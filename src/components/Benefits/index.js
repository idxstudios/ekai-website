// src/Benefits.js
import React from 'react';
import './styles.scss';
import SaveHours from "../../assets/savehours.png";
import Decision from "../../assets/decision.png";
import TimeZone from "../../assets/timezone.png";


const Benefits = () => {
    return (
        <main className='benefits-main'>
         
            <div className="benefits-container">
                <div className="benefit-item">
                    <div className="icon">
                        <img src={SaveHours} alt='' />
                    </div>
                    <div className="text">
                        <h3>Save hours for critical thinking and creative work</h3>
                    </div>
                </div>
                <div className="benefit-item">
                    <div className="icon">
                        <img src={Decision} alt='' />
                    </div>
                    <div className="text">
                        <h3>Faster decision making by removing blockers</h3>
                    </div>
                </div>
                <div className="benefit-item">
                    <div className="icon">
                        <img src={TimeZone} alt='' />
                    </div>
                    <div className="text">
                        <h3>Enable cross time zone team collaboration</h3>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Benefits;
