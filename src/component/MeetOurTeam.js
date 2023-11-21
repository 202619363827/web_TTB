import React from 'react';
import './MeetOurTeam.css'; 
import teamImage from './design.png'; 

const MeetOurTeam = () => {
  return (
    <div className='meet-our-team-container'>
      <h2>Meet Our Team</h2>
      <div className='team-item'>
        <img src={teamImage} alt="Meet Our Team" />
        <h3>Our Awesome Team</h3>
      </div>
    </div>
  );
};

export default MeetOurTeam;
