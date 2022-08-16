import React, { useState } from 'react';
import styles from '../../styles/find_projects.module.scss';

const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState('');

  return (
    <div className={styles.findprojects__filters}>
      <input type="text" />
      <div>
        <button>Budget</button>
      </div>
      <div>
        <button>Distance</button>
      </div>
      <div>
        <button>Type</button>
      </div>
      <div>
        <button>Category</button>
      </div>
    </div>
  );
};

export default Filter;
