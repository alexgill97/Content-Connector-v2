import React, { useState } from 'react';
import styles from '../../styles/modal.module.scss';

const ApplyProject = ({ project, setOpen }) => {
  console.log(project);
  return (
    <>
      <div>
        <div className={styles.overlay}></div>
        <div className={styles.modal_container}>
          <div onClick={() => setOpen(false)}>X</div>
          <p>{project.projectId}</p>
          <input type="text" />
        </div>
      </div>
    </>
  );
};

export default ApplyProject;
