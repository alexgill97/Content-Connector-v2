import React from 'react';
import styles from '../../styles/find_projects.module.scss';

const Filter = () => {
  return (
    <div className={styles.findprojects__filters}>
      <input type="text" />
      <button>Budget</button>
      <button>Distance</button>
      <button>Type</button>
      <button>Category</button>
    </div>
  );
};

export default Filter;
