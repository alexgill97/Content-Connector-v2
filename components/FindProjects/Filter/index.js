import React, { useState } from 'react';
import styles from '../../../styles/find_projects.module.scss';
import BudgetFilter from './BudgetFilter';
import DistanceFilter from './DistanceFilter';
import CategoryFilter from './CategoryFilter';
import TypeFilter from './TypeFilter';

const Filter = ({
  getFilteredProjects,
  minimum,
  setMinimum,
  maximum,
  setMaximum,
  distance,
  setDistance,
  mediaType,
  setMediaType,
  checkboxCategories,
  setCheckboxCategories,
}) => {
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
          {selectedFilter === 'budget' && (
            <BudgetFilter
              minimum={minimum}
              setMinimum={setMinimum}
              maximum={maximum}
              setMaximum={setMaximum}
            />
          )}
        </div>
        <div className={styles.filter__item}>
          <button
            onClick={() =>
              setSelectedFilter(selectedFilter !== 'distance' ? 'distance' : '')
            }
          >
            Distance
          </button>
          {selectedFilter === 'distance' && (
            <DistanceFilter distance={distance} setDistance={setDistance} />
          )}
        </div>
        <div className={styles.filter__item}>
          <button
            onClick={() =>
              setSelectedFilter(selectedFilter !== 'type' ? 'type' : '')
            }
          >
            Type
          </button>
          {selectedFilter === 'type' && (
            <TypeFilter mediaType={mediaType} setMediaType={setMediaType} />
          )}
        </div>
        <div className={styles.filter__item}>
          <button
            onClick={() =>
              setSelectedFilter(selectedFilter !== 'category' ? 'category' : '')
            }
          >
            Category
          </button>
          {selectedFilter === 'category' && (
            <CategoryFilter
              checkboxCategories={checkboxCategories}
              setCheckboxCategories={setCheckboxCategories}
            />
          )}
        </div>
        <button onClick={() => getFilteredProjects()}>Submit</button>
      </div>
    </div>
  );
};

export default Filter;
