import { getDocs, orderBy, collection } from 'firebase/firestore';
import { firestore } from './clientApp';

const getUserReviews = async (uid, setUserReviews) => {
  const reviews = await getDocs(
    collection(firestore, 'users', uid, 'reviews'),
    orderBy('desc')
  );
  const reviewsArr = [];
  const data = reviews.forEach((review) => reviewsArr.push(review.data()));
  setUserReviews(reviewsArr);
};

export default getUserReviews;
