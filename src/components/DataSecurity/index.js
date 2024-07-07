// src/DataSecure.js
import React from 'react';
import './styles.scss';
import DataEnc from "../../assets/dataenc.png";
import DataAcc from "../../assets/dataacc.png";
import Deploy from "../../assets/deployement.png";



const DataSecurity = () => {
    return (
        <main className='DataSecure-main'>
               <h1>Data security is our top priority</h1>
            <div className="DataSecure-container">
                <div className="DataSecure-item">
                    <div className="icon">
                        <img src={DataEnc} alt='' />
                    </div>
                    <div className="text">
                        <h3>Data Encryption</h3>
                        <p>Your Data is never mixed with other users. Each user gets their own entirely separate Vector Database and your Data is secured with AES-256 military grade encryption.</p>
                    </div>
                </div>
                <div className="DataSecure-item">
                    <div className="icon">
                        <img src={DataAcc} alt='' />
                    </div>
                    <div className="text">
                        <h3>Data access</h3>
                        <p>Only you (and your AI) can access your data. Your Data will never be used by us or by anyone. Knowing this is a huge peace of mind, for you and for us.</p>
                    </div>
                </div>
                <div className="DataSecure-item">
                    <div className="icon">
                        <img src={Deploy} alt='' />
                    </div>
                    <div className="text">
                        <h3>Flexible Deployment Options</h3>
                        <p>You have full ownership of your Data & your AI. Everything you share to your AI is strictly yours, and stays under your control.</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DataSecurity;
