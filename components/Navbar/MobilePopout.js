import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/navbar.module.scss';

import close from '../../public/close.svg';
import Login from '../Login';

const MobilePopout = ({ setOpen }) => {
  return (
    <div className={styles.mobile_menu} onClick={() => setOpen(!open)}>
      <div className={styles.close}>
        <Image src={close} layout="fill" />
      </div>
      <div>
        <ul>
          <Link href="/findprojects">
            <li>Find Freelancers</li>
          </Link>
          <Link href="/findfreelancers">
            <li>Find Creators</li>
          </Link>

          <Login />
        </ul>
      </div>
    </div>
  );
};

export default MobilePopout;
