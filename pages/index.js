import styles from '../styles/home.module.scss';
import Link from 'next/link';

import HeroImage from '../public/hero-image.jpg';

import React, { useContext } from 'react';
import { AuthContext } from '../firebase/context';

import Image from 'next/image';
import background1 from '../public/background-1.png';
import background2 from '../public/background-2.png';

import Navbar from '../components/Navbar';
import ProjectsAvailable from '../components/Home/ProjectsAvailable';
import CustomerSatisfaction from '../components/Home/CustomerSatisfaction';

export default function Home() {
  const { currentUser, userData } = useContext(AuthContext);

  return (
    <div className={styles.home_container}>
      <div className={styles.background_container}>
        <div className={styles.image1}>
          <Image src={background1} layout="fill" />
        </div>
      </div>
      <Navbar />
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
          <div className={styles.home_buttons}>
            <button className={styles.find_projects}>Find Projects</button>
            <button className={styles.find_creators}>Find Creators</button>
          </div>
        </div>
        <div className={styles.heading_sub}>
          <div className={styles.hero_container}>
            <ProjectsAvailable />
            <CustomerSatisfaction />
            <Image
              src={HeroImage}
              className={styles.hero_image}
              alt=""
              layout="fill"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
