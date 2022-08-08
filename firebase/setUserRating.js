import {
  doc,
  updateDoc,
  addDoc,
  setDoc,
  collection,
  Timestamp,
} from 'firebase/firestore';

import { firestore } from './clientApp';
import getUserData from './getUserData';

const setUserRating = async (
  uid,
  messageId,
  id,
  projectTitle,
  projectRating,
  reviewText
) => {
  const { completedProjects, rating } = await getUserData(uid);
  const ratingToNumber = Number(projectRating);
  const projectAverageTotal = rating * completedProjects;
  const newProjectAverageTotal = projectAverageTotal + ratingToNumber;
  const newCompletedProjects = completedProjects + 1;
  const newRating = newProjectAverageTotal / newCompletedProjects;

  console.log(newRating);
  await updateDoc(doc(firestore, 'users', uid), {
    rating: newRating,
    completedProjects: newCompletedProjects,
  });
  await updateDoc(doc(firestore, 'messages', messageId, 'chat', id), {
    completedAt: Timestamp.fromDate(new Date()),
    completed: true,
  });
  await updateDoc(doc(firestore, 'projects', id), {
    completedAt: Timestamp.fromDate(new Date()),
    completed: true,
  });
  await addDoc(collection(firestore, 'users', uid, 'reviews'), {
    rating: ratingToNumber,
    projectNumber: newCompletedProjects,
    completedAt: Timestamp.fromDate(new Date()),
    projectTitle,
    reviewText,
  });
};

export default setUserRating;
