import React from 'react';
import './styles.scss';
import teamImage from '../../assets/career.svg';

export default function Career() {
  return (
    <div>
      <div className="join-our-team">
        <div className="header">
          <h1>Join Our Team</h1>
          <p>
            Be a part of the future of workplace technology.
            We're looking for passionate, innovative
            individuals to join our team and help us revolutionize productivity. Explore our current
            openings and apply today!
          </p>
          <button className="resume-button">SHARE YOUR RESUME</button>
        </div>
        <div className="content">
          <img src={teamImage} alt="Team working" className="team-image" />

        </div>
      </div>
      <div className="openings">
        <h2>Openings</h2>
       <div className='opening-div'>
       <div className="opening">
          <h3>Digital Marketing Manager</h3>
          <p>Required Experience</p>
          <button className="join-button">JOIN NOW</button>
        </div>
        <div className="opening">
          <h3>Digital Marketing Manager</h3>
          <p>Required Experience</p>
          <button className="join-button">JOIN NOW</button>
        </div>
        <div className="opening">
          <h3>Digital Marketing Manager</h3>
          <p>Required Experience</p>
          <button className="join-button">JOIN NOW</button>
        </div>
       </div>
      </div>
    </div>
  )
}
