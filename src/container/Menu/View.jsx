// View.jsx

import React from 'react';
import './View.css';

const View = ({ onClose }) => {
  return (
    <div className='view-container'>
      <div className='view-content'>
        <div className='header'>
          <h1>Special Menu</h1>
          <button className='close-button' onClick={onClose}>&times;</button>
        </div>
        <div className='info-section'>
          <p className='intro-text'>
            Welcome to our exclusive special menu! Indulge in a culinary journey that transcends ordinary dining.
          </p>
          <div className='highlights'>
            <div className='highlight-item'>
              <h2>Experience the Extraordinary</h2>
              <p>Discover a curated selection of dishes and drinks crafted with passion and creativity.</p>
            </div>
            <div className='highlight-item'>
              <h2>Culinary Delights Await You</h2>
              <p>From signature dishes to chef's specials, each item is a masterpiece that delights the senses.</p>
            </div>
          </div>
        </div>
        <div className='menu-section'>
          <h2>Featured Food Items</h2>
          <ul>
            <li>
              <span className='menu-item'>Signature Dish 1</span>
              <span className='item-description'>A tantalizing blend of flavors that leaves a lasting impression.</span>
            </li>
            <li>
              <span className='menu-item'>Signature Dish 2</span>
              <span className='item-description'>An exquisite creation that showcases culinary expertise.</span>
            </li>
            <li>
              <span className='menu-item'>Chef's Special Pasta</span>
              <span className='item-description'>Pasta perfection with a symphony of fresh ingredients.</span>
            </li>
            <li>
              <span className='menu-item'>Deluxe Burger</span>
              <span className='item-description'>A burger experience like no other, served with gourmet flair.</span>
            </li>
          </ul>
        </div>
        <div className='drinks-section'>
          <h2>Special Drinks</h2>
          <ul>
            <li>
              <span className='menu-item'>Classic Martini</span>
              <span className='item-description'>Timeless elegance in a glass, expertly shaken or stirred.</span>
            </li>
            <li>
              <span className='menu-item'>Fruit Punch Delight</span>
              <span className='item-description'>A burst of fruity goodness, refreshing and invigorating.</span>
            </li>
            <li>
              <span className='menu-item'>Mocktail Madness</span>
              <span className='item-description'>Non-alcoholic wonders that redefine the art of mocktails.</span>
            </li>
            <li>
              <span className='menu-item'>Smoothie Sensation</span>
              <span className='item-description'>Blend of fresh fruits, creating a smoothie symphony for your taste buds.</span>
            </li>
          </ul>
        </div>
        <div className='offers-section'>
          <h2>Current Offers</h2>
          <ul>
            <li>Happy Hour: Enjoy 50% off on selected drinks during our daily Happy Hour.</li>
            <li>Weekend Special: Receive a complimentary dessert with every main course on weekends.</li>
            <li>Loyalty Rewards: Join our loyalty program and earn points with every visit for exclusive rewards.</li>
            {/* Additional Offers Information */}
            <li>New Year Countdown: Special discounts during our New Year's Eve celebration!</li>
            <li>Early Bird Special: Get 20% off when you dine with us before 6 PM.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default View;
