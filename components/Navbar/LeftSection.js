import React from 'react';
import Link from 'next/link';
import styles from '../../styles/navbar.module.scss';

const LeftSection = () => {
  return (
    <Link href="/">
      <div className={styles.nav_left}>
        <img src="/LHL_final_logo.png" alt="" />
        <p className={styles.nav_logo}>Content Connector</p>
      </div>
    </Link>
  );
};

export default LeftSection;
