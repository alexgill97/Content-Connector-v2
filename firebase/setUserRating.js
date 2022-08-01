import { doc, setDoc } from 'firebase/firestore';
import { firestore } from './clientApp';

const setUserRating = async (
  uid,
  currentRating,
  completedProjects,
  projectRating
) => {
  const newCompletedProjects = completedProjects + 1;
  const newRating =
    (currentRating * completedProjects + projectRating) / newCompletedProjects;

  console.log(newRating);
  await setDoc(doc(firestore, 'users', uid), {
    rating: newRating,
    completedProjects: newCompletedProjects,
  });
};

export default setUserRating;
