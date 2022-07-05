import React from 'react';
import styles from '../../styles/projectsAvailable.module.scss';

const ProjectsAvailable = () => {
  return (
    <div className={styles.project_amount}>
      <small>
        Available <br /> Projects
      </small>
      <div>
        <span>23</span>
        {/* <FiArrowUp size={25} color="#FFF" /> */}
      </div>

      <i className={styles.circle1}></i>
      <i className={styles.circle2}></i>
      <i className={styles.circle3}></i>
    </div>
  );
};

export default ProjectsAvailable;
