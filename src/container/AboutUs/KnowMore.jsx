// KnowMore.jsx

import React from 'react';
import './KnowMore.css';

const KnowMore = ({ onClose, contentType }) => {
  return (
    <div className={`know-more-page ${contentType}-page open`}>
      <div className='know-more-content'>
        <div className='close-icon' onClick={onClose}>
          &#10006;
        </div>
        {contentType === 'about' && (
          <>
            <h1>About Us</h1>
            <p>
              Welcome to our modern and innovative restaurant! At Gericht, we believe in redefining the dining experience.
            </p>
            <p>
              Our culinary journey began with a passion for exceptional experiences. From handpicked ingredients to innovative
              creations, we strive to make every meal a celebration.
            </p>
            <p>
              Our chefs, inspired by both tradition and innovation, curate dishes that not only please the
              palate but also tell a story. Join us on this gastronomic adventure, where every bite is an
              expression of our commitment to quality and hospitality.
            </p>
            <p>
              Whether you're here for a casual meal or a special occasion, our warm ambiance and attentive
              service aim to create memorable moments. Thank you for being a part of our journey.
            </p>
          </>
        )}
        {contentType === 'history' && (
          <>
            <h1>Our History</h1>
            <p>
              Discover the rich tapestry of Gericht's history, woven with culinary milestones and a dedication to hospitality.
            </p>
            <p>
              Gericht's history is a tapestry woven with culinary milestones and a dedication to hospitality.
              From our humble beginnings to becoming a beloved establishment, each chapter reflects our passion
              for creating memorable dining experiences.
            </p>
            <p>
              Our signature dishes, crafted over the years, tell stories of innovation and tradition. We take
              pride in being a part of our patrons' celebrations, anniversaries, and everyday moments.
            </p>
            <p>
              As we continue to evolve, our commitment to quality remains unwavering. Join us in celebrating
              not just our history but also the stories we create together, one delightful meal at a time.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default KnowMore;
