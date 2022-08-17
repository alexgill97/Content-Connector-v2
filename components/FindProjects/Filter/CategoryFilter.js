import React from 'react';
import styles from '../../../styles/find_projects.module.scss';

const checkboxCategories = [
  { displayName: 'Wedding', value: true },
  { displayName: 'Lifestyle', value: true },
  { displayName: 'Product', value: true },
  { displayName: 'Fashion', value: true },
  { displayName: 'Sports', value: true },
  { displayName: 'Real Estate', value: true },
  { displayName: 'Automotive', value: true },
  { displayName: 'Portrait', value: true },
  { displayName: 'Brand', value: true },
  { displayName: 'Event', value: true },
];

const CategoryFilter = () => {
  return (
    <div className={styles.filter__modal}>
      <label htmlFor="wedding">
        <input type="checkbox" name="wedding" id="wedding" value={wedding} />
        Wedding
      </label>
      {/* <input type="checkbox" id="wedding" />
      <label htmlFor="">Product</label>
      <input type="checkbox" id="wedding" />
      <label htmlFor="">Wedding</label>
      <input type="checkbox" id="wedding" />
      <label htmlFor="">Wedding</label> */}
    </div>
  );
};

export default CategoryFilter;
