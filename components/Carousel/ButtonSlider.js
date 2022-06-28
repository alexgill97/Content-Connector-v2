import React from 'react';
import styles from '../../styles/slider.module.scss';
import leftArrow from '../../public/left-arrow.svg';
import rightArrow from '../../public/right-arrow.svg';
import Image from 'next/image';

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={
        direction === 'next'
          ? `${styles.btn_slide} ${styles.next}`
          : `${styles.btn_slide} ${styles.prev}`
      }
    >
      <Image
        className={styles.btn_slide_image}
        src={direction === 'next' ? '/right-arrow.svg' : '/left-arrow.svg'}
        layout="fill"
      />
    </button>
  );
}
