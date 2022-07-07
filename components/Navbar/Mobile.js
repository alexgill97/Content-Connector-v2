import React from 'react';
import styles from '../../styles/navbar.module.scss';

import MenuIcon from '../../public/hamburger-menu.svg';
import Image from 'next/image';

const Mobile = () => {
  return (
    <div className={styles.mobile_container}>
      <Image className={styles.menu_icon} src={MenuIcon} />
    </div>
  );
};

export default Mobile;
