import BtnSlider from './ButtonSlider';
import React, { useState, useContext, useEffect } from 'react';
import { firestore } from '../../firebase/clientApp';
import { collectionGroup, query, getDocs, where } from 'firebase/firestore';
import { AuthContext } from '../../firebase/context';
import styles from '../../styles/slider.module.scss';

const Slider = ({ uid }) => {
  //Get current user
  const { currentUser } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    getUserPortfolio(uid);
  }, [uid]);

  // Get Users Portfolio
  const getUserPortfolio = async (id) => {
    const querySnapshot = await getDocs(
      query(collectionGroup(firestore, `portfolio`), where('uid', '==', id))
    );
    let portfolioImages = [];
    querySnapshot.forEach((doc) => {
      portfolioImages.push(doc.data().image);
    });

    setImages(portfolioImages);
    setLoading(false);
  };

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
          {loading && <div>loading...</div>}
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
                  slideIndex === index + 1 ? styles.active : styles.dot
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
