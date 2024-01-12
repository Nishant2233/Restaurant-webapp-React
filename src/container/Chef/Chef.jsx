import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content-quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>
          Savor the moments, where every dish is a chapter, and every meal is a story. In our restaurant, we serve not just food but experiences, crafting memories at every table. Indulge in the artistry of flavors, where passion meets palate, and each bite tells a tale of culinary excellence.
          </p>
        </div>
        <div className='app__chef-sign'>
          <p>John Wick</p>
          <p className='p__opensans'>Chef and Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
