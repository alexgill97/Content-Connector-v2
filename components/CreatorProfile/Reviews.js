import React, { useEffect } from 'react';
import styles from '../../styles/creator_profile.module.scss';
import getUserReviews from '../../firebase/getUserReviews';

const Reviews = ({ uid }) => {
  useEffect(() => {
    getUserReviews(uid);
  }, []);

  return (
    <div className={styles.interface_reviews}>
      {/* {reviews.map(({ overview, rating, date, feedback }) => (
        <div className={styles.review_item}>
          <h5>{overview}</h5>
          <div className={styles.review_sub_info}>
            <p>{rating}</p>
            <p className={styles.date}>{date}</p>
          </div>
          <div className={styles.feedback}>{feedback}</div>
        </div>
      ))} */}
    </div>
  );
};

export default Reviews;
