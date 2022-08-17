import React, { useState } from 'react';
import styles from '../../../styles/find_projects.module.scss';
import BudgetFilter from './BudgetFilter';
import DistanceFilter from './DistanceFilter';
import CategoryFilter from './CategoryFilter';
import TypeFilter from './TypeFilter';

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
          {selectedFilter === 'distance' && <DistanceFilter />}
        </div>
        <div className={styles.filter__item}>
          <button
            onClick={() =>
              setSelectedFilter(selectedFilter !== 'type' ? 'type' : '')
            }
          >
            Type
          </button>
          {selectedFilter === 'type' && <TypeFilter />}
        </div>
        <div className={styles.filter__item}>
          <button
            onClick={() =>
              setSelectedFilter(selectedFilter !== 'category' ? 'category' : '')
            }
          >
            Category
          </button>
          {selectedFilter === 'category' && <CategoryFilter />}
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Filter;
