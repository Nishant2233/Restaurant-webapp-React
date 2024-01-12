import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  const subscribe = () => {
    // Replace 'https://example.com' with the URL you want to open in a new tab
    window.open('https://www.youtube.com/watch?v=HfdfdZnD9C0', '_blank');
  };

  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <SubHeading title="Newsletter" />
        <h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
        <p className='p__opensans'>And Never Miss Latest Updates!</p>
      </div>
      <div className='app__newsletter-input flex__center'>
        <input type="email" placeholder='Enter your e-mail address' />
        <button className='custom__button' onClick={subscribe}>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
