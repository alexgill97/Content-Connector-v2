import { updateDoc, doc, Timestamp } from 'firebase/firestore';
import React, { useContext } from 'react';
import { firestore } from '../../firebase/clientApp';
import styles from '../../styles/project_item.module.scss';

import { AuthContext } from '../../firebase/context';
import CompleteProject from '../Modal/CompleteProject';

const ProjectItem = ({ message, messageId }) => {
  const { currentUser, userData } = useContext(AuthContext);
  const { to, from, projectTitle, projectOffer, text, createdAt, accepted } =
    message;

  const acceptOffer = async () => {
    await updateDoc(
      doc(firestore, 'messages', messageId, 'chat', projectTitle),
      { accepted: true, acceptedAt: Timestamp.fromDate(new Date()) }
    );
  };

  return (
    <div className={styles.project_item}>
      Offer Receieved
      <h5>{projectTitle}</h5>
      <p>{from}</p>
      <p>Offer: ${projectOffer}</p>
      <p>Project Outline:</p>
      <p>{text}</p>
      {!accepted && !userData.isBusiness && (
        <button onClick={acceptOffer}>Accept</button>
      )}
      {accepted && userData.isBusiness && (
        <CompleteProject
          userData={userData}
          creatorUid={to}
          projectTitle={projectTitle}
          projectOffer={projectOffer}
        />
      )}
    </div>
  );
};

export default ProjectItem;
