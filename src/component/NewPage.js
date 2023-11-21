


import React, { useState } from 'react';
import './NewPage.css';

const NewPage = () => {
  
  const [signupData, setSignupData] = useState({ name: '', email: '', whatsapp: '' });

    
  const handleInputChange = (e) => {
    
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

    
//   };

  const handleClaimNow = () => {
    alert('Claim button clicked!');
  };

  return (
    <div className="page-content">
      <div className="benefits-section">
      <h1>Unlock Interviews with a Standout Resume</h1>
        <h1>
          <span style={{ color: '#02243' }}>   Why a  </span>
          <span style={{ color: '#4CAF4F' }}>Great Resume Matters </span>
          <span style={{ color: '#02243' }}>:  </span>
        </h1>

        <ul className="benefits-list">
          <li className="benefits-item">
            <strong>Makes a Strong First Impression:</strong> Captures attention and showcases your potential.
          </li>
          <li className="benefits-item">
            <strong>ATS-Friendly:</strong> Designed to get past automated filters and into human hands.
          </li>
          <li className="benefits-item">
            <strong>Highlights Your Skills:</strong> Clearly presents your experiences and abilities.
          </li>
        </ul>
      </div>

      <div className="signup-section">
        
        <form>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={signupData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={signupData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />

          <label>WhatsApp Number:</label>
          <input
            type="tel"
            name="whatsapp"
            value={signupData.whatsapp}
            onChange={handleInputChange}
            placeholder="Enter your WhatsApp number"
          />

          <button
            type="button"
            onClick={handleClaimNow}
            style={{ backgroundColor: '#4CAF4F', color: '#fff' }}
          >
            Claim Now
          </button>
          <h2>*Only 39 slots left out of 100</h2>
        </form>
      </div>
    </div>
  );
};

export default NewPage;
