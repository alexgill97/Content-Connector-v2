import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/navbar.module.scss';

import close from '../../public/close.svg';
import Login from '../Login';

const MobilePopout = ({ setOpen }) => {
  const ref = useRef(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={styles.mobile_menu}
      onClick={() => setOpen(!open)}
    >
      <div className={styles.close}>
        <Image src={close} layout="fill" />
      </div>
      <div className={styles.popout_links}>
        <Link href="/findprojects">Find Freelancers</Link>
        <Link href="/findfreelancers">Find Creators</Link>
        <div className={styles.break_div}></div>
        <Link href="/findfreelancers">Login</Link>
        <Link href="/findfreelancers">Sign Up</Link>
      </div>
    </div>
  );
};

export default MobilePopout;
