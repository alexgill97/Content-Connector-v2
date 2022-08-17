import React, { useState } from 'react';
import styles from '../../../styles/find_projects.module.scss';

const DistanceFilter = ({ distance, setDistance }) => {
  return (
    <div className={styles.filter__modal}>
      <button
        className={distance === 5 && styles.distance__selected}
        onClick={() => setDistance(5)}
      >
        5km
      </button>
      <button
        className={distance === 10 && styles.distance__selected}
        onClick={() => setDistance(10)}
      >
        10km
      </button>
      <button
        className={distance === 20 && styles.distance__selected}
        onClick={() => setDistance(20)}
      >
        20km
      </button>
      <button
        className={distance === 40 && styles.distance__selected}
        onClick={() => setDistance(40)}
      >
        40km
      </button>
      <button
        className={distance === 60 && styles.distance__selected}
        onClick={() => setDistance(60)}
      >
        60km
      </button>
      <button
        className={distance === 80 && styles.distance__selected}
        onClick={() => setDistance(80)}
      >
        80km
      </button>
      <button
        className={distance === 100 && styles.distance__selected}
        onClick={() => setDistance(100)}
      >
        100km
      </button>
      <button
        className={distance === 250 && styles.distance__selected}
        onClick={() => setDistance(250)}
      >
        250km
      </button>
      <button
        className={distance === 500 && styles.distance__selected}
        onClick={() => setDistance(500)}
      >
        500km
      </button>
    </div>
  );
};

export default DistanceFilter;
