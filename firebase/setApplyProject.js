import { addDoc, collection } from 'firebase/firestore';
import { firestore } from './clientApp';

const setApplyProject = async (projectId, userData, projectOffer) => {
  await addDoc(collection(firestore, 'projects', projectId, 'applications'), {
    userData,
    projectOffer,
  });
};

export default setApplyProject;
