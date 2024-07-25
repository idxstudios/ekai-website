import React from 'react';
import './styles.scss';
import Ashutosh from '../../assets/ashutosh.jpg'; // Update the path to your image
import Gaurav from '../../assets/gaurav.jpg'
import Amit from '../../assets/amit.jpg';
import Rahul from '../../assets/rahul.jpg';
const teamMembers = [
  {
    name: 'Ashutosh Tiwari',
    title: 'Chief Executive Officer',
    image: Ashutosh,
    point1: 'Coinbase - Eng Leader',
    point2: 'Authentic ID - Senior VP'
  },
  {
    name: 'Gaurav Agrawal',
    title: 'Chief Product Officer',
    point1: 'Circle News - Cofounder',
    point2: 'IIT K Alumnus',
    image: Gaurav,
  },
  {
    name: 'Amit Kumar',
    title: 'Chief Technology Officer',
    point1: 'IIT-K Alumnus',
    image: Amit,
  },
  {
    name: 'Rahul Meena',
    title: 'Chief AI Officer',
    point1: 'IIT-K Alumnus',
    image: Rahul,
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
            <p>{member.point1}</p>
            <p>{member.point2}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
