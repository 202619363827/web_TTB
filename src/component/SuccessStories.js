
import React from 'react';
import './SuccessStories.css';
import image1 from './placeholder.png';
import image2 from './placeholder.png';
import image3 from './placeholder.png';

const SuccessStories = () => {
  const images = [image1, image2, image3];
  const collegeNames = ['College A', 'College B', 'College C'];

  return (
    <div className='success-stories-container'>
      <h1>SUCCESS STORIES</h1>
      <div className='success-story'>
        {images.map((image, index) => (
          <div key={index} className='story-item'>
            <img src={image} alt={`Success Story ${index + 1}`} />
            <h3>{collegeNames[index]}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
