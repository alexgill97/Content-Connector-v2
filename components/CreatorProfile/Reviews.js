import React, { useState, useEffect } from 'react';
import styles from '../../styles/creator_profile.module.scss';
import getUserReviews from '../../firebase/getUserReviews';

const Reviews = ({ uid }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getUserReviews(uid, setReviews);
  }, []);
  console.log(reviews);

  return (
    <div className={styles.interface_reviews}>
      {reviews?.map(({ projectOutline, rating, completedAt, reviewText }) => (
        <div className={styles.review_item}>
          <h5>{projectOutline}</h5>
          <div className={styles.review_sub_info}>
            <p>{rating}</p>
            <p className={styles.date}>
              {completedAt.toDate().toLocaleDateString('en-US')}
            </p>
          </div>
          <div className={styles.feedback}>{reviewText}</div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
