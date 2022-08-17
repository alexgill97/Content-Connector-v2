import React, { useState } from 'react';
import styles from '../../../styles/find_projects.module.scss';

const BudgetFilter = ({ minimum, setMinimum, maximum, setMaximum }) => {
  return (
    <div className={styles.filter__modal}>
      <div className={styles.budget__input_container}>
        <input
          type="tel"
          value={minimum}
          onChange={(e) => setMinimum(e.target.value)}
        />
        <p>-</p>
        <input
          type="tel"
          value={maximum}
          onChange={(e) => setMaximum(e.target.value)}
        />
      </div>
    </div>
  );
};

export default BudgetFilter;
