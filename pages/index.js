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
        <div>
          <p>
            Find projects in your area <br /> looking for a creative flare
          </p>
          <button>Show Projects</button>
        </div>
        <div>
          <p>
            See the creators in your area <br /> developing breathtaking visuals
          </p>
          <button>View Creators</button>
        </div>
      </div>
      <div>
        <p>Ready to get started?</p>
        <button>Sign Up</button>
      </div>
    </main>
  );
}
