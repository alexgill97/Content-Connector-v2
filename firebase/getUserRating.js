import { doc, setDoc } from 'firebase/firestore';
import { firestore } from './clientApp';

const setUserRating = async (
  uid,
  currentRating,
  completedProjects,
  projectRating
) => {
  const newRating =
    (currentRating * completedProjects + projectRating) /
    (completedProjects + 1);
  console.log(newRating);
  await setDoc(doc(firestore, 'users', uid), {
    rating: newRating,
  });
};

export default setUserRating;
