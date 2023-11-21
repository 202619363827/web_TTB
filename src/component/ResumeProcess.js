import React from 'react';
import './ResumeProcess.css';

const ResumeRevampProcess = () => {
  return (
    <div className='some'>
      <h1 className='middle'>Here’s How It Works</h1>


      <ol className="resume-list">
        <li className="resume-item">
          <strong>Submit Your Details:</strong> Provide your Name, WhatsApp Number, and upload your Current Resume in the fields below.
        </li>
        <li className="resume-item">
          <strong>Group Addition:</strong> Within 24 hours of submission, you will be added to a WhatsApp group with our Resume Writer.
        </li>
        <li className="resume-item">
          <strong>Information Collection:</strong> Our Resume Writer team will share a Google Doc for you to input additional details.
        </li>
        <li className="resume-item">
          <strong>Receive Your New Resume:</strong> After updating the provided Doc, our team will share your revamped resume within 48 hours.
        </li>
        <li className="resume-item">
          <strong>Video Testimonial:</strong> If you’re pleased with the result, we kindly request a video testimonial. Once shared, you’ll get your revamped resume, no strings attached!
        </li>
      </ol>
     
    </div>
  );
};

export default ResumeRevampProcess;
