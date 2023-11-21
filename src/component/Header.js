import React from 'react';
import logo from './logo.png'; 
import './Header.css'; 

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="logo" />
      </div>
      <div className="header-text">
      <h1>
      <span style={{ color: '#02243' }}>   ACCELERATE  </span> 
      <span style={{ color: 'white' }}> YOUR  </span> 
      <span style={{ color: '#02243F' }}> TECH CAREER </span> 
      <span style={{ color: 'white' }}>IN CANADA !</span>
    </h1>
      
        <h2 className='white'>Exclusive Free Resume Writing Service to 5X Your Job Hunt </h2>
      </div>
 
    </header>
  );
};

export default Header;
