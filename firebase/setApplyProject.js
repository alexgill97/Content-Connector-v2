import {
  addDoc,
  doc,
  setDoc,
  collection,
  serverTimestamp,
} from 'firebase/firestore';
import { firestore } from './clientApp';

const setApplyProject = async (project, userData, projectOffer, message) => {
  const messageId =
    userData.uid > project.businessId
      ? `${userData.uid + project.businessId}`
      : `${project.businessId + userData.uid}`;
  console.log(messageId);
  await setDoc(
    doc(collection(firestore, 'projects', project.projectId, 'applications')),
    {
      userData,
      projectOffer,
      message,
    }
  );

  await setDoc(doc(collection(firestore, 'messages', messageId, 'chat')), {
    projectId: project.projectId,
    messageType: 'application',
    text: project.projectOutline,
    from: userData.uid,
    to: project.businessId,
    createdAt: serverTimestamp(),
    completedBy: project.completedBy,
    projectTitle: project.projectTitle,
    projectOffer,
    businessAvatar: project.businessAvatar,
    accepted: false,
    completed: false,
    city: project.city,
    projectLocation: project.projectLocation,
    projectCoordinates: project.projectCoordinates,
  });
};

export default setApplyProject;
