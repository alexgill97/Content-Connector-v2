import React, { useState } from 'react';
import styles from '../../../styles/find_projects.module.scss';

// const checkboxCategories = [
//   { displayName: 'Wedding', value: true },
//   { displayName: 'Lifestyle', value: true },
//   { displayName: 'Product', value: true },
//   { displayName: 'Fashion', value: true },
//   { displayName: 'Sports', value: true },
//   { displayName: 'Real Estate', value: true },
//   { displayName: 'Automotive', value: true },
//   { displayName: 'Portrait', value: true },
//   { displayName: 'Brand', value: true },
//   { displayName: 'Event', value: true },
// ];

const CategoryFilter = () => {
  const [checkboxCategories, setCheckboxCategory] = useState([
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
  ]);

  const handleChange = (event, category, index) => {
    let tempCheckboxCategories = [...checkboxCategories];
    tempCheckboxCategories[index].value = !category.value;
    setCheckboxCategory(tempCheckboxCategories);
  };

  const listCategories = checkboxCategories.map((category, index) => (
    <div>
      <input
        type="checkbox"
        name=""
        value={category}
        checked={category.value}
        onChange={(e) => handleChange(e, category, index)}
        id={category.displayName}
      />
      <label htmlFor={category.displayName}>{category.displayName}</label>
    </div>
  ));

  return <div className={styles.filter__modal}>{listCategories}</div>;
};

export default CategoryFilter;
