import React from 'react';
import styles from '../../styles/creator_profile.module.scss';

const reviews = [
  {
    overview: 'Outdoor family photo retouching and editing',
    rating: 'XXXXX',
    date: 'Aug 8, 2019',
    feedback:
      'Mike was a pleasure to work with and adhered to all the stipulations we requested for this project. Would definitely work with him again.',
  },
  {
    overview: 'Outdoor family photo retouching and editing',
    rating: 'XXXXX',
    date: 'Aug 8, 2019',
    feedback:
      'Mike was a pleasure to work with and adhered to all the stipulations we requested for this project. Would definitely work with him again.',
  },
  {
    overview: 'Outdoor family photo retouching and editing',
    rating: 'XXXXX',
    date: 'Aug 8, 2019',
    feedback:
      'Mike was a pleasure to work with and adhered to all the stipulations we requested for this project. Would definitely work with him again.',
  },
  {
    overview: 'Outdoor family photo retouching and editing',
    rating: 'XXXXX',
    date: 'Aug 8, 2019',
    feedback:
      'Mike was a pleasure to work with and adhered to all the stipulations we requested for this project. Would definitely work with him again.',
  },
  {
    overview: 'Outdoor family photo retouching and editing',
    rating: 'XXXXX',
    date: 'Aug 8, 2019',
    feedback:
      'Mike was a pleasure to work with and adhered to all the stipulations we requested for this project. Would definitely work with him again.',
  },
  {
    overview: 'Outdoor family photo retouching and editing',
    rating: 'XXXXX',
    date: 'Aug 8, 2019',
    feedback:
      'Mike was a pleasure to work with and adhered to all the stipulations we requested for this project. Would definitely work with him again.',
  },
];

const Reviews = ({}) => {
  return (
    <div className={styles.interface_reviews}>
      {reviews.map(({ overview, rating, date, feedback }) => (
        <div className={styles.review_item}>
          <h5>{overview}</h5>
          <div className={styles.review_sub_info}>
            <p>{rating}</p>
            <p className={styles.date}>{date}</p>
          </div>
          <div className={styles.feedback}>{feedback}</div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
