import React, { useState } from 'react';
import styles from '../../../styles/find_projects.module.scss';
import BudgetFilter from './BudgetFilter';

const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState('');

  return (
    <div className={styles.findprojects__filters}>
      <div className={styles.findprojects__search}>
        <input type="text" />
      </div>
      <div className={styles.filter__item_container}>
        <div className={styles.filter__item}>
          <button
            onClick={() =>
              setSelectedFilter(selectedFilter !== 'budget' ? 'budget' : '')
            }
          >
            Budget
          </button>
          {selectedFilter === 'budget' && <BudgetFilter />}
        </div>
        <div className={styles.filter__item}>
          <button
            onClick={() =>
              setSelectedFilter(selectedFilter !== 'distance' ? 'distance' : '')
            }
          >
            Distance
          </button>
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
