import React from 'react';
import './styles.scss';

export default function ElevateCard({ reverse, gifSrc, title, para }) {
    console.log("GIF Source:", gifSrc);

    return (
        <main>
            <div className={`Elevate ${reverse ? "row-rev" : "row"}`}>
                <div className='left'>
                    <img alt='card' src={gifSrc} />
                </div>
                <div className='right'>
                    <h1>{title}</h1>
                    <p>{para}</p>
                </div>
            </div>
        </main>
    )
}
