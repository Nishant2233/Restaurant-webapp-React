// Photo.jsx
import React, { useState } from 'react';
import { BsX, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import './Photo.css';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Gallery Image 1',
  },
  {
    url: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Gallery Image 2',
  },
  {
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Gallery Image 3',
  },
  {
    url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Gallery Image 4',
  },
  // Add more images as needed
];

const Photo = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageOpen, setIsImageOpen] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleImageClick = () => {
    setIsImageOpen(true);
  };

  const handleCloseImage = () => {
    setIsImageOpen(false);
  };

  return (
    <div className={`full-page-modal ${isImageOpen ? 'image-open' : ''}`}>
      <div className='photo-modal'>
        <BsX className='photo-modal-close' onClick={onClose} />
        <h1 className='gallery-heading'>Our Memory / Gallery</h1>
        {galleryImages.length > 0 && (
          <div className='photo-navigation'>
            <BsChevronLeft className='arrow-icon left' onClick={handlePrev} />
            <img
              src={galleryImages[currentIndex].url}
              alt={galleryImages[currentIndex].alt}
              className={`photo-modal-image ${isImageOpen ? 'big-image' : ''}`}
              onClick={handleImageClick}
            />
            <BsChevronRight className='arrow-icon right' onClick={handleNext} />
          </div>
        )}
        {isImageOpen && (
          <div className='big-image-modal'>
            <BsX className='close-big-image' onClick={handleCloseImage} />
            <img
              src={galleryImages[currentIndex].url}
              alt={galleryImages[currentIndex].alt}
              className='big-image-content'
            />
          </div>
        )}
      </div>
      <div className='section-container' style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'black', border: '2px solid gold', justifyContent: 'space-between' }}>
        <div className='section' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px', backgroundColor: '  background-color: rgba(81, 20, 20, 0.9);', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)', animation: 'fadeInUp 0.8s ease-in-out' }}>
          <h2>Best Food Experience</h2>
          <p>Indulge in our exquisite dishes that bring together flavors from around the world.</p>
          <img src='https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Food' />
        </div>
        <div className='section' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px', backgroundColor: '  background-color: rgba(81, 20, 20, 0.9);', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)', animation: 'fadeInUp 0.8s ease-in-out' }}>
          <h2>Snacks Delight</h2>
          <p>Our snacks will tantalize your taste buds, offering a perfect blend of flavors and crunch.</p>
          <img src='https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Snacks' />
        </div>
      </div>
      {/* Add more sections as needed */}
    </div>
  );
};

export default Photo;
