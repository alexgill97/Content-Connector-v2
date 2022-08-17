import React, { useState } from 'react';
import styles from '../../../styles/find_projects.module.scss';

const CategoryFilter = ({ checkboxCategories, setCheckboxCategories }) => {
  const handleChange = (category, index) => {
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
        onChange={() => handleChange(category, index)}
        id={category.displayName}
      />
      <label htmlFor={category.displayName}>{category.displayName}</label>
    </div>
  ));

  return <div className={styles.filter__modal}>{listCategories}</div>;
};

export default CategoryFilter;
