import React, { useState } from 'react';
import styles from '../../styles/modal.module.scss';

import setApplyProject from '../../firebase/setApplyProject';

const ApplyProject = ({ project, userData, setOpen }) => {
  const handleApply = () => {
    setApplyProject(project.projectId, userData, 100);
    setOpen(false);
  };

  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.modal_container}>
        <div onClick={() => setOpen(false)}>X</div>
        <p>{project.projectId}</p>
        <input type="text" />

        <button onClick={() => handleApply}>Send</button>
      </div>
    </>
  );
};

export default ApplyProject;
