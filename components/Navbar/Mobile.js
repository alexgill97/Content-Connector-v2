import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/navbar.module.scss';
import MenuIcon from '../../public/hamburger-menu.svg';

import MobilePopout from './MobilePopout';
import Image from 'next/image';

const Mobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.mobile_container}>
      {open ? (
        <MobilePopout setOpen={setOpen} />
      ) : (
        <Image
          onClick={() => setOpen(!open)}
          className={styles.menu_icon}
          src={MenuIcon}
        />
      )}
    </div>
  );
};

export default Mobile;
