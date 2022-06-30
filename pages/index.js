import styles from '../styles/home.module.scss';
import Link from 'next/link';

// import HomeImage from '../LHL_final homepage.png'

import React, { useContext } from 'react';
import { AuthContext } from '../firebase/context';

export default function Home() {
  const { currentUser, userData } = useContext(AuthContext);

  return (
    <main className={styles.home_main}>
      <div className={styles.title}>
        <h2>
          Connecting Businesses <br />
          with
          <br /> Local Creators.
        </h2>
      </div>
      <div>
        <div> See who is hiring or creating in, Toronto, Canada</div>
        <div>Show creators in your area</div>
      </div>
      <div></div>
    </main>
  );
}
