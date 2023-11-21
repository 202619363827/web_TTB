import React from 'react';
import './footer.css'; 
import youtubeLogo from './you.png'; 
import linkedinLogo from './linkedin.png'; 

const footer = () => {
  return (
    <div className='footer-container'>
      <h2>Connect with us!</h2>
      <div className='social-icons'>
        <img src={youtubeLogo} alt='YouTube' />
        <img src={linkedinLogo} alt='LinkedIn' />
      </div>
      <div className='copyright'>
        <div className='line'></div>
        <p>&copy; 2023 Top Talent Bridge | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default footer;
