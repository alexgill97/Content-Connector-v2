import React from 'react';
import styles from '../../styles/creator_profile.module.scss';

const reviews = [
  {
    overview: 'Outdoor family photo retouching and editing',
    rating: 5,
    date: 'Aug 8, 2019',
    feedback:
      'Mike was a pleasure to work with and adhered to all the stipulations we requested for this project. Would definitely work with him again.',
  },
  {
    overview: 'Outdoor family photo retouching and editing',
    rating: 5,
    date: 'Aug 8, 2019',
    feedback:
      'Mike was a pleasure to work with and adhered to all the stipulations we requested for this project. Would definitely work with him again.',
  },
  {
    overview: 'Outdoor family photo retouching and editing',
    rating: 5,
    date: 'Aug 8, 2019',
    feedback:
      'Mike was a pleasure to work with and adhered to all the stipulations we requested for this project. Would definitely work with him again.',
  },
  {
    overview: 'Outdoor family photo retouching and editing',
    rating: 5,
    date: 'Aug 8, 2019',
    feedback:
      'Mike was a pleasure to work with and adhered to all the stipulations we requested for this project. Would definitely work with him again.',
  },
];

const Reviews = ({}) => {
  return (
    <div className={styles.interface_reviews}>
      {reviews.map(({ overview, rating, date, feedback }) => (
        <div>
          <h5>{overview}</h5>
          <div>
            <p>{rating}</p>
            <p>{date}</p>
          </div>
          <div>{feedback}</div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
