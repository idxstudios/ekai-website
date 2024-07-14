import React from 'react';
import './styles.scss';
import teamImage from '../../assets/career.svg';

export default function Career() {

  const handleShareResume = () => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Mobile-specific logic
      window.location.href = "mailto:kai@idxstudioz.com"

      console.log('Mobile device detected');
    } else {
      // Desktop-specific logic
      console.log('Desktop device detected');
      window.open("https://mail.google.com/mail/u/0/?view=cm&fs=1&to=kai@idxstudioz.com", '_blank');
    }

  }

  return (
    <div>
      <div className="join-our-team">
        <div className="header">
          <h1>Join Our Team</h1>
          <p>
            Be a part of the future of workplace technology.
            We're looking for passionate, innovative
            individuals to join our team and help us
            revolutionize productivity. Explore our current
            openings and apply today!
          </p>
          <button onClick={handleShareResume} className="resume-button">SHARE YOUR RESUME</button>
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
            <button onClick={handleShareResume} className="join-button">JOIN NOW</button>
          </div>
          <div className="opening">
            <h3>Digital Marketing Manager</h3>
            <p>Required Experience</p>
            <button onClick={handleShareResume} className="join-button">JOIN NOW</button>
          </div>
          <div className="opening">
            <h3>Digital Marketing Manager</h3>
            <p>Required Experience</p>
            <button onClick={handleShareResume} className="join-button">JOIN NOW</button>
          </div>
        </div>
      </div>
    </div>
  )
}
