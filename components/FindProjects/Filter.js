import React, { useState } from 'react';
import styles from '../../styles/find_projects.module.scss';

const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState('');

  return (
    <div className={styles.findprojects__filters}>
      <div className={styles.findprojects__search}>
        <input type="text" />
      </div>
      <div className={styles.filter__item_container}>
        <div className={styles.filter__item}>
          <button>Budget</button>
        </div>
        <div className={styles.filter__item}>
          <button>Distance</button>
        </div>
        <div className={styles.filter__item}>
          <button>Type</button>
        </div>
        <div className={styles.filter__item}>
          <button>Category</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
