import React, { useState, useEffect } from 'react';
import styles from '../../styles/creator_profile.module.scss';
import getUserReviews from '../../firebase/getUserReviews';

const Reviews = ({ uid, rating }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getUserReviews(uid, setReviews);
  }, []);
  console.log(reviews);

  return (
    <div className={styles.reviews}>
      {reviews?.map(({ projectOutline, rating, completedAt, reviewText }) => (
        <div className={styles.review_item}>
          <div className={styles.review__header}>
            <div className={styles.review__header_left}>
              <p>XXXXX</p>
              <p className={styles.date}>
                Completed {completedAt.toDate().toLocaleDateString('en-US')}
              </p>
            </div>
            <div className={styles.review__header_right}>
              <p>Product</p>
            </div>
          </div>
          <h5>{projectOutline}</h5>
          <div className={styles.feedback}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
