// Header.jsx

import React, { useState } from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';
import './Header.css';
import Explore from './Explore';

const Header = () => {
  const [isExploreVisible, setExploreVisible] = useState(false);

  const redirectToAnotherSite = () => {
    // Replace 'https://example.com' with the URL you want to redirect to
    window.location.href = 'https://example.com';
  };

  const toggleExplore = () => {
    setExploreVisible(!isExploreVisible);
  };

  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__info'>
        <SubHeading title="Chase the new flavour" />
        <h1 className='app__header-h1'> The key to find Dining</h1>
        <p className='p__opensans' style={{ margin: '2rem 1rem 2rem 0', paddingRight: "50px" }}>
          Explore the art of dining at Gericht, where each dish is a crafted masterpiece of precision and passion.
          Immerse yourself in our warm and inviting ambiance, and indulge in a symphony of flavors curated by our skilled chefs.
          Join us in celebrating culinary artistry and genuine hospitality. Ready to dive into a culinary journey?
        </p>
        <button type='button' className='custom__button' onClick={toggleExplore}>
          Explore Menu
        </button>
      </div>
      <div className='app__img'></div>
      <img src={images.welcome} alt="header img" style={{ width: '50%' }} />

      {/* Conditionally render Explore component */}
      {isExploreVisible && <Explore onClose={toggleExplore} />}
    </div>
  );
};

export default Header;
