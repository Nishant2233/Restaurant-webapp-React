import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay  />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact' >
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'> 123 Culinary Avenue, Gourmet Gardens, Savoryville, Culinaryland.</p>
        <p className='p__opensans'>1 212-334-1230</p>
        <p className='p__opensans'>1 212-535-1530</p>

      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="gerith
        cht" />

        <p className='p__opensans'>The best way to find yourself is to lose yourself in the service of other </p>

        <img src={images.spoon} alt="sppon" className='spoon__img' style={{marginTop:"15px"}} />

        <div className='app__footer-links-icons'>
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>




      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'> Working Hours</h1>
        <p className='p__opensans'> Monday-Friday</p>
        <p className='p__opensans'>08:00 am - 12:00am</p>
        <p className='p__opensans'>Satuday-Sunday</p>
        <p className='p__opensans'>07:00 am - 11:00pm</p>
      </div>
    </div>
    <div className='footer__copyright'></div>
    <p className='p__opensans'>Created By Nishant Rathod</p>
    
  </div>
);

export default Footer;
