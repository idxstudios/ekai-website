import React from 'react';
import './styles.scss';
import teamImage from '../../assets/person.png'; // Update the path to your image

const teamMembers = [
  {
    name: 'Ashutosh Tiwari',
    title: 'Founder and CEO',
    description: 'short description',
    image: teamImage,
  },
  {
    name: 'Ashutosh Tiwari',
    title: 'Founder and CEO',
    description: 'short description',
    image: teamImage,
  },
  {
    name: 'Ashutosh Tiwari',
    title: 'Founder and CEO',
    description: 'short description',
    image: teamImage,
  },  // You can add more team members here if needed
];

const Team = () => {
  return (
    <div className="team-container">
      <h1>Meet Our Team</h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} />
            <h2>{member.name}</h2>
            <h3>{member.title}</h3>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
