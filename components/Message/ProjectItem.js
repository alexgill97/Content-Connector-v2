import { updateDoc, doc, Timestamp, where } from 'firebase/firestore';
import React, { useContext } from 'react';
import { firestore } from '../../firebase/clientApp';
import styles from '../../styles/project_item.module.scss';

import { AuthContext } from '../../firebase/context';
import CompleteProject from '../Modal/CompleteProject';

const ProjectItem = ({ message, messageId }) => {
  const { currentUser, userData } = useContext(AuthContext);
  const {
    to,
    from,
    projectId,
    projectTitle,
    projectOffer,
    text,
    completed,
    createdAt,
    completedBy,
    completedAt,
    accepted,
  } = message;

  const acceptOffer = async () => {
    await updateDoc(doc(firestore, 'messages', messageId, 'chat', projectId), {
      accepted: true,
      acceptedAt: Timestamp.fromDate(new Date()),
    });
    await updateDoc(doc(firestore, 'projects', projectId), {
      accepted: true,
      acceptedAt: Timestamp.fromDate(new Date()),
    });
  };

  return (
    <div className={styles.project_item}>
      {!accepted && !completed && <p>Offer Receieved</p>}
      {accepted && !completed && <p>Project in Progress</p>}
      {accepted && completed && <p>Project Completed</p>}
      <h5>{projectTitle}</h5>
      <p>{from}</p>
      {completedBy && (
        <p>Complete by: {completedBy.toDate().toLocaleDateString('en-US')}</p>
      )}
      {completedAt && (
        <p>Complete on: {completedAt.toDate().toLocaleDateString('en-US')}</p>
      )}
      <p>Offer: ${projectOffer}</p>
      <p>Project Outline:</p>
      <p>{text}</p>
      {!accepted && !userData.isBusiness && (
        <button onClick={acceptOffer}>Accept</button>
      )}
      {accepted && !completed && userData.isBusiness && (
        <CompleteProject
          userData={userData}
          projectId={projectId}
          creatorUid={to}
          messageId={messageId}
          projectTitle={projectTitle}
          projectOffer={projectOffer}
        />
      )}
    </div>
  );
};

export default ProjectItem;
