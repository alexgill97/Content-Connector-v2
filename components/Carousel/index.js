import BtnSlider from './ButtonSlider';
import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../firebase/context';
import styles from '../../styles/slider.module.scss';

const Slider = ({ images, uid }) => {
  //Get current user
  const { currentUser } = useContext(AuthContext);

  //Tracks current selected slide
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== images.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === images.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(images.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <>
      {images.length && (
        <div className={styles.container_slider}>
          {images.map((image, index) => (
            <div
              key={index}
              className={
                slideIndex === index + 1
                  ? styles.slide && styles.active_anim
                  : styles.slide
              }
            >
              <img src={image} />
            </div>
          ))}
          <BtnSlider moveSlide={nextSlide} direction={'next'} />
          <BtnSlider moveSlide={prevSlide} direction={'prev'} />

          <div className={styles.container_dots}>
            {Array.from({ length: images.length }).map((item, index) => (
              <div
                onClick={() => moveDot(index + 1)}
                className={
                  slideIndex === index + 1
                    ? styles.dot && styles.active
                    : styles.dot
                }
              ></div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Slider;
