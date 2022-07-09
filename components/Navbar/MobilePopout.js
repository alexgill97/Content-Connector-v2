import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/navbar.module.scss';

import MenuIcon from '../../public/hamburger-menu.svg';
const MobilePopout = ({ setOpen }) => {
  return (
    <div className={styles.mobile_menu} onClick={() => setOpen(!open)}>
      <div className={styles.close}>
        <Image
          className={styles.close_image}
          src={MenuIcon}
          layout="fill"
          alt=""
        />
      </div>
      <div>
        <ul>
          <Link href="/findprojects">
            <li>Find Freelancers</li>
          </Link>
          <Link href="/findfreelancers">
            <li>Find Creators</li>
          </Link>

          <Link href="/login">
            <li>Login</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MobilePopout;
