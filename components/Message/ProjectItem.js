import React from 'react';
import styles from '../../styles/project_item.module.scss';

const ProjectItem = ({ message }) => {
  console.log(message);
  const { to, from, projectTitle, projectOffer, text, createdAt, accepted } =
    message;
  return (
    <div className={styles.project_item}>
      <h5>{projectTitle}</h5>
      <p>{from}</p>
      <p>${projectOffer}</p>
      <p>{text}</p>
      {!accepted && <button>Pay Now</button>}
    </div>
  );
};

export default ProjectItem;
