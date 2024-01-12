// Gallery.jsx

import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import Photo from './Photo';
import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [isFullScreen, setIsFullScreen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const openPhotoModal = (imageUrl, index) => {
    setSelectedImage(imageUrl);
    setCurrentIndex(index);
    setIsFullScreen(true);
  };

  const closePhotoModal = () => {
    setSelectedImage(null);
    setIsFullScreen(false);
  };

  const goToPrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : galleryImages.length - 1));
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex < galleryImages.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title='Instagram' />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}>
          Explore the essence of our restaurant through captivating visuals in our photo gallery. Immerse yourself in the inviting ambiance, savor the artistry of our chef's creations, and witness the joy of dining captured in moments shared by our valued customers. Let our photo gallery be your window to the exceptional experience that awaits you at our establishment.
        </p>
        <button type='button' className='custom__button' onClick={() => openPhotoModal(galleryImages[0], 0)}>
          View More
        </button>
      </div>

      <div className='app__gallery-images'>
        <div className='gallery__arrow' onClick={goToPrevImage}>
          <BsArrowLeftShort className='gallery__arrow-icon' />
        </div>
        <div className='app__gallery-images_container'>
          {galleryImages.map((image, index) => (
            <div
              className={`app__gallery-images_card flex__center ${isFullScreen ? 'full-photo' : 'half-photo'}`}
              key={`gallery_image_${index}`}
              onClick={() => openPhotoModal(image, index)}
            >
              <img src={image} alt={`gallery_${index + 1}`} />
              {!isFullScreen && <BsInstagram className='gallery__image-icon' />}
            </div>
          ))}
        </div>
        <div className='gallery__arrow' onClick={goToNextImage}>
          <BsArrowRightShort className='gallery__arrow-icon' />
        </div>
      </div>

      {selectedImage && <Photo imageUrl={selectedImage} onClose={closePhotoModal} />}
    </div>
  );
};

export default Gallery;
