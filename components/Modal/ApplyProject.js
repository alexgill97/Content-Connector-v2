import React, { useState } from 'react';
import styles from '../../styles/modal.module.scss';

import setApplyProject from '../../firebase/setApplyProject';

const ApplyProject = ({ project, userData, setOpen }) => {
  const [offer, setOffer] = useState(0);
  const [message, setMessage] = useState('');

  console.log(project);

  const handleApply = () => {
    console.log('test');
    setApplyProject(project, userData, offer, message);
    setOpen(false);
  };

  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.modal_container}>
        <div onClick={() => setOpen(false)}>X</div>
        <p>{project.projectId}</p>
        <input type="number" />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button onClick={() => handleApply()}>Send</button>
      </div>
    </>
  );
};

export default ApplyProject;
