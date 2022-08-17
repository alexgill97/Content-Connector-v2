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
  const [checkboxCategories, setCheckboxCategories] = useState([
    { displayName: 'Wedding', id: 'wedding', value: true },
    { displayName: 'Lifestyle', id: 'lifestyle', value: true },
    { displayName: 'Product', id: 'product', value: true },
    { displayName: 'Fashion', id: 'fashion', value: true },
    { displayName: 'Sport', id: 'sport', value: true },
    { displayName: 'Real Estate', id: 'realEstate', value: true },
    { displayName: 'Automotive', id: 'automotive', value: true },
    { displayName: 'Portrait', id: 'portrait', value: true },
    { displayName: 'Brand', id: 'brand', value: true },
    { displayName: 'Event', id: 'event', value: true },
  ]);

  const handleChange = (event, category, index) => {
    let tempCheckboxCategories = [...checkboxCategories];
    tempCheckboxCategories[index].value = !category.value;
    setCheckboxCategories(tempCheckboxCategories);
  };

  const listCategories = checkboxCategories.map((category, index) => (
    <div>
      <input
        key={category.index}
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
