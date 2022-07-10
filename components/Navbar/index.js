import React, { useContext, useState } from 'react';
import { AuthContext } from '../../firebase/context';
import Link from 'next/link';

import { updateCurrentUser } from 'firebase/auth';
import styles from '../../styles/navbar.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';

import LeftSection from './LeftSection';
import MiddleSection from './MiddleSection';
import RightSection from './RightSection';
import Mobile from './Mobile';

const Navbar = () => {
  const { userData, currentUser } = useContext(AuthContext);
  const router = useRouter();

  const path = router.pathname;

  return (
    <nav className={styles.nav_container}>
      {/* Left Section */}
      <LeftSection />
      {/* Middle Section */}
      <MiddleSection />
      {/* Right Section */}
      <RightSection currentUser={currentUser} userData={userData} />

      {/* Mobile Section */}
      <Mobile />
    </nav>
  );
};

export default Navbar;
