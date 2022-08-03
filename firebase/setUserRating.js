import { doc, setDoc } from 'firebase/firestore';
import { firestore } from './clientApp';
import getUserData from './getUserData';

const setUserRating = async (uid, projectRating, reviewText) => {
  const { completedProjects, rating } = await getUserData(uid);

  const newCompletedProjects = completedProjects + 1;
  const newRating =
    (rating * completedProjects + projectRating) / newCompletedProjects;

  console.log(newRating);
  await setDoc(doc(firestore, 'users', uid), {
    rating: newRating,
    completedProjects: newCompletedProjects,
  });
  await addDoc(doc(firestore, 'users', uid, reviews), {
    rating,
    projectNumber: newCompletedProjects,
    reviewText,
  });
};

export default setUserRating;
