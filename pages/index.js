import styles from '../styles/home.module.scss';
import Link from 'next/link';

// import HomeImage from '../LHL_final homepage.png'

import React, { useContext } from 'react';
import { AuthContext } from '../firebase/context';

export default function Home() {
  const { currentUser, userData } = useContext(AuthContext);

  return (
    <main className={styles.home_main}>
      <div className={styles.heading_main}>
        <h2 className={styles.copy_main}>
          Connecting Businesses <br />
          with
          <br /> Local Creators
        </h2>
        <p className={styles.copy_sub}>
          Find the perfect creative in Toronto, Canada for your project
        </p>
      </div>
      <div className={styles.heading_sub}>
        <div> See who is hiring or creating in, Toronto, Canada</div>
        <div>Show creators in your area</div>
      </div>
      <div>
        <p>Ready to get started?</p>
        <button>Sign Up</button>
      </div>
    </main>
  );
}
