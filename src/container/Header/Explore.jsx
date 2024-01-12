// Explore.jsx

import React, { useState, useEffect } from 'react';
import './Explore.css';

const Explore = ({ onClose }) => {
  const [offerTimer, setOfferTimer] = useState(60 * 60); // 1 hour in seconds
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submittedReview, setSubmittedReview] = useState(false);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setOfferTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : prevTimer));
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmitReview = () => {
    // Handle the submission of the review (you can implement an API call here)
    setSubmittedReview(true);
  };

  return (
    <div className={`explore-container ${submittedReview ? 'submitted' : ''}`}>
      <div className="special-offer-container">
        <section className="special-offer-section">
          <div className="special-offer-content">
            <h3>Exclusive Offer</h3>
            <p>Hurry! Limited-time special offer ends in:</p>
            <div className="timer">{formatTime(offerTimer)}</div>
           
          </div>
        </section>
      </div>
      <div className="explore-content">
        <div className="explore-header">
          <h2>Explore Our Restaurant</h2>
          {/* <button onClick={onClose}>Close</button> */}
          <button className="close-button" onClick={onClose}>
        Close
      </button>
        </div>

        {/* Menu Highlights Section */}
        <section className="menu-highlights-section">
          <div className="menu-highlights">
            <div>
              <h3>Appetizers</h3>
              <ul>
                <li>Bruschetta</li>
                <li>Caprese Salad</li>
                <li>Spinach Artichoke Dip</li>
              </ul>
            </div>
            <div>
              <h3>Main Courses</h3>
              <ul>
                <li>Filet Mignon</li>
                <li>Salmon Risotto</li>
                <li>Vegetarian Pasta</li>
              </ul>
            </div>
            <div>
              <h3>Desserts</h3>
              <ul>
                <li>Chocolate Fondue</li>
                <li>Tiramisu</li>
                <li>Crème Brûlée</li>
              </ul>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="about-us-section">
          <div>
            <h3>About Us</h3>
            <p>
              Welcome to Gericht, where culinary artistry meets genuine hospitality. Immerse yourself in our warm and inviting ambiance, and indulge in a symphony of flavors curated by our skilled chefs.
            </p>
          </div>
        </section>

        {/* Ambiance Section */}
        <section className="ambiance-section">
          <div>
            <h3>Ambiance</h3>
            <p>
              Our restaurant offers a warm and inviting ambiance, providing the perfect setting for a delightful dining experience.
            </p>
          </div>
        </section>

        {/* Opening Hours Section */}
        <section className="opening-hours-section">
          <div>
            <h3>Opening Hours</h3>
            <div>
              <h4>Monday - Friday</h4>
              <p>11:00 AM - 10:00 PM</p>
            </div>
            <div>
              <h4>Saturday - Sunday</h4>
              <p>12:00 PM - 11:00 PM</p>
            </div>
          </div>
        </section>

        {/* Special Events Section */}
        <section className="special-events-section">
          <div>
            <h3>Special Events</h3>
            <p>
              Celebrate your special occasions with us. We host events such as weddings, birthdays, and corporate gatherings. Contact us for more details.
            </p>
          </div>
        </section>

        {/* Review Section */}
        <section className="review-section">
          <div>
            <h3>Customer Reviews</h3>
            {!submittedReview ? (
              <div className="review-form">
                <div className="rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={star <= rating ? 'selected' : ''}
                      onClick={() => handleStarClick(star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <textarea
                  placeholder="Type your review here..."
                  value={feedback}
                  onChange={handleFeedbackChange}
                ></textarea>
                <button onClick={handleSubmitReview}>Submit Review</button>
              </div>
            ) : (
              <p>Thank you for your review!</p>
            )}
          </div>
        </section>

        {/* Marketing Section */}
        <section className="marketing-section">
          <div>
            <h3>Discover Excellence in Every Bite!</h3>
            <p>
              Explore our culinary haven and savor the finest dishes crafted with passion. Join us for an unforgettable dining experience.
            </p>
          </div>
        </section>

        {/* Additional Section */}
        <section className="additional-section">
          <div>
            <h3>Additional Information</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit neque eget justo suscipit, at cursus elit pellentesque.
            </p>
          </div>
        </section>

        {/* Reservation Section */}
        <section className="reservation-section">
          <div>
            <h3>Reservations</h3>
            <p>
              Make a reservation for a memorable dining experience. Contact us via phone or use our online reservation system.
            </p>
          </div>
        </section>

        {/* Offers Section */}
        <section className="offers-section">
          <div>
            <h3>Special Offers</h3>
            <p>
              Check our website regularly for special offers and promotions. Don't miss out on exclusive discounts and events.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Explore;
