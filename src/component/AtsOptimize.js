
import React from 'react';
import ats1Image from './ats1.png'; 

import ats2Image from './ats2.png';
import ats3Image from './ats3.png';
import ats4Image from './ats4.png';
import ats5Image from './ats5.png';
import ats6Image from './ats6.png';
import ats7Image from './ats7.png';
import './AtsOptimize.css'; 





const ATSOptimized = () => {
    return (
      <div className="ats-optimized-container">
        <div className="ats-optimized-section">
        
        <h1>
  <span style={{ color: '#021f38' }}>Our  </span>
  <span style={{color:'#4CAF4F'}}>Canada-Specific</span>
  <span style={{ color: '#021f38' }}> Resume Writing </span>
  <span style={{ color: '#4CAF4F' }}>Service</span>
</h1>
          
          <p>
            1. ATS-Optimized: Our resumes are designed to pass through ATS filters, increasing your chances of landing an interview.
          </p>
          <img src={ats1Image} alt="ATS-Optimized" />
        </div>
  
    
        <div className="ats-optimized-section">
          <p>
          2. Guaranteed Interview Calls:
We’re so confident in our service that we guarantee interview calls, or we’ll revise your resume.
     
          </p>
          <img src={ats2Image} alt="ATS-Optimized" />
        </div>
  
        <div className="ats-optimized-section">
          <p>
          3. Personal Branding:
We don’t just list your experiences; we craft a narrative that showcases your unique professional story.
       
          </p>
          <img src={ats3Image} alt="ATS-Optimized" />
        </div>
  
        <div className="ats-optimized-section">
          <p>
          4. Industry Insights:
With our deep understanding of the tech industry, we tailor your resume to speak to industry-specific trends and demands.
         
          </p>
          <img src={ats4Image} alt="ATS-Optimized" />
        </div>
  
        <div className="ats-optimized-section">
          <p>
          5. Fast Turnaround:
Our direct communication approach significantly reduces the time it takes to finalize a resume that’s ready to go.
          
          </p>
          <img src={ats5Image} alt="ATS-Optimized" />
        </div>
  
        <div className="ats-optimized-section">
          <p>
          6. Unlimited Revisions:
We work with you until you’re 100% satisfied with your resume.
         
          </p>
          <img src={ats6Image} alt="ATS-Optimized" />
        </div>
  
        <div className="ats-optimized-section">
          <p>
          7. Confidentiality Assured:
Your personal and professional information is safe with us.
        
          </p>
          <img src={ats7Image} alt="ATS-Optimized" />
        </div>
      </div>
    );
  };
  
  export default ATSOptimized;
  

