import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/navbar.module.scss';
import close from '../../public/close.svg';

import MenuIcon from '../../public/hamburger-menu.svg';
import Image from 'next/image';

const Mobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.mobile_container}>
      {open ? (
        <div
          style={{ transition: '1s ease-in-out' }}
          className={styles.mobile_menu}
          onClick={() => setOpen(!open)}
        >
          <div className={styles.close}>
            <Image
              className={styles.close_image}
              src={close}
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
