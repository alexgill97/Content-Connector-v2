import styles from '../styles/home.module.scss';
import Link from 'next/link';

import HeroImage from '../public/hero-image.jpg';

import React, { useContext } from 'react';
import { AuthContext } from '../firebase/context';
import Image from 'next/image';

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
        <h4 className={styles.copy_sub}>
          Find the perfect creative in <br /> Toronto, Canada for your project
        </h4>
      </div>
      <div className={styles.heading_sub}>
        <div className={styles.hero_container}>
          <Image
            src={HeroImage}
            className={styles.hero_image}
            alt=""
            layout="fill"
          />
        </div>
      </div>
    </main>
  );
}
