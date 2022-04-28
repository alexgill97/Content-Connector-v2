import React from 'react';
import styles from '../styles/slider.module.scss';
// import leftArrow from './icons/left-arrow.svg';
// import rightArrow from './icons/right-arrow.svg';

export default function CaroueslBtn({ direction, moveSlide }) {
  // console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
    >
      {/* <img src={direction === 'next' ? rightArrow : leftArrow} /> */}
    </button>
  );
}