import React from 'react'
import './styles.scss'
import CardImage from "../../assets/elevateCard.png"

export default function ElevateCard({ reverse, title, para }) {
    return (
        <main>
            <div className={`Elevate ${reverse ? "row-rev" : "row"}`}>
                <div className='left'>
                    <img src={CardImage} alt='card' />
                </div>
                <div className='right'>
                    <h1>{title}</h1>
                    <p>
                        {para}
                    </p>
                </div>
            </div>
        </main>
    )
}
