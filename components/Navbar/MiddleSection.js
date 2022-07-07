import React from 'react';
import Link from 'next/link';
import styles from '../../styles/navbar.module.scss';

const MiddleSection = () => {
  return (
    <div className={styles.nav_middle}>
      <Link href="/findprojects">
        <p className={`${styles.a}`}>Find Projects</p>
      </Link>
      <Link href="/findfreelancers">
        <p className={`${styles.a}`}>Find Creators</p>
      </Link>
    </div>
  );
};

export default MiddleSection;
