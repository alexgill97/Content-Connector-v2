import BtnSlider from './BtnSlider';
import React, { useState, useContext, useEffect } from 'react';
import { firestore } from '../../firebase/clientApp';
import {
  doc,
  deleteDoc,
  getDocs,
  where,
  query,
  collectionGroup,
} from 'firebase/firestore';
import { AuthContext } from '../../firebase/context';
import styles from '../styles/slider.module.scss';

const Slider = ({ portfolio, uid }) => {
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
    <div className="container-slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
        >
          <img
            className="h-full w-full object-cover lg:object-cover"
            src={image}
          />
        </div>
      ))}
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />

      <div className="container-dots">
        {Array.from({ length: images.length }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
