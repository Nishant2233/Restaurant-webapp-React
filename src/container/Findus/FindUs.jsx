import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => {
  const openNewTab = () => {
    // Replace 'https://example.com' with the URL you want to open in a new tab
    window.open('https://zoomquilt.org/', '_blank');
  };

  return (
    <div className='app__bg app__wrapper section__padding' id='contact'>
      <div className='app__wrapper_info'>
        <SubHeading title="Contact" />
        <h1 className='headtext__cormorant' style={{ marginBottom: "3rem" }}> Find Us</h1>
        <div className='app__wrapper_content'>
          <p className='p__opensans'>
            Gericht is situated at 123 Culinary Avenue, Gourmet Gardens, Savoryville, Culinaryland.
          </p>
          <p className='p__cormorant' style={{ color: "#DCCA87", margin: "2rem 0" }}>Opening Hours</p>
          <p className='p__cormorant'>Mon - Fri 10:00 am - 02:00 am</p>
          <p className='p__cormorant'>Sat - Sun 10:00 am - 02:00 am</p>
        </div>
        <button className='custom__button' style={{ marginTop: '2rem' }} onClick={openNewTab}>
          Visit Us
        </button>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.findus} alt="findus" />
      </div>
    </div>
  );
};

export default FindUs;
