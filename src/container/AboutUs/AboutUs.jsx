// AboutUs.jsx

import React, { useState } from 'react';
import { images } from '../../constants';
import './AboutUs.css';
import KnowMore from './KnowMore'; // Import the KnowMore component

const AboutUs = () => {
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const openAboutUs = () => {
    setShowAboutUs(true);
  };

  const openHistory = () => {
    setShowHistory(true);
  };

  const closeKnowMore = () => {
    setShowAboutUs(false);
    setShowHistory(false);
  };

  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className='app__aboutus-overlay flex__center'>
        <img src={images.G} alt="g letter" />
      </div>
      <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt="about_ spoon" className='spoon__img' />
          <p className='p__opensans'>Welcome to Gericht, where culinary excellence meets warm hospitality. Established with a passion for exceptional dining experiences, we take pride in creating a haven for food enthusiasts. From our chef's innovative creations to our inviting ambiance, every element is crafted to delight your senses. Join us on a gastronomic journey, where our commitment to quality and genuine hospitality defines the essence of Gericht.</p>
          <button type='button' className='custom__button' onClick={openAboutUs}>
            Know more
          </button>
        </div>
        <div className='app__aboutus-content_knife flex__center'>
          <img src={images.knife} alt="about_knife" />
        </div>
        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt="about_ spoon" className='spoon__img' />
          <p className='p__opensans'>Embark on a journey through our rich history, where each chapter is marked by culinary milestones and a dedication to hospitality. From our humble beginnings to the evolution of our signature dishes, our history reflects a narrative of passion, innovation, and a commitment to creating memorable dining experiences. Join us as we continue to write new chapters and welcome you into the legacy of our restaurant</p>
          <button type='button' className='custom__button' onClick={openHistory}>
            Know more
          </button>
        </div>
      </div>
      {showAboutUs && <KnowMore onClose={closeKnowMore} contentType='about' />}
      {showHistory && <KnowMore onClose={closeKnowMore} contentType='history' />}
    </div>
  );
};

export default AboutUs;
