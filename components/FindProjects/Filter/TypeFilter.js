import React, { useState } from 'react';
import styles from '../../../styles/find_projects.module.scss';

const TypeFilter = () => {
  const [mediaType, setMediaType] = useState('both');

  return (
    <div className={styles.filter__modal}>
      <button
        onClick={() => setMediaType('both')}
        className={mediaType === 'both' && styles.type__selected}
      >
        Both
      </button>
      <button
        onClick={() => setMediaType('photography')}
        className={mediaType === 'photography' ? styles.type__selected : null}
      >
        Photography
      </button>
      <button
        onClick={() => setMediaType('videography')}
        className={mediaType === 'videography' ? styles.type__selected : null}
      >
        Videography
      </button>
    </div>
  );
};

export default TypeFilter;
