import { updateDoc, doc } from 'firebase/firestore';
import React from 'react';
import { firestore } from '../../firebase/clientApp';
import styles from '../../styles/project_item.module.scss';

const ProjectItem = ({ message, messageId }) => {
  console.log(message);
  const { to, from, projectTitle, projectOffer, text, createdAt, accepted } =
    message;

  const acceptOffer = async () => {
    await updateDoc(
      doc(firestore, 'messages', messageId, 'chat', projectTitle),
      { accepted: true }
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
      {!accepted && <button onClick={acceptOffer}>Accept</button>}
    </div>
  );
};

export default ProjectItem;
