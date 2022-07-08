import React from 'react';
import Link from 'next/link';
import styles from '../../styles/navbar.module.scss';
import Logout from '../Logout';
import Login from '../Login';

const RightSection = ({ currentUser }) => {
  return (
    <div className={styles.nav_right}>
      {currentUser && userData ? (
        <div className={styles.nav_right_user_true}>
          <Link href="/messages">
            <span className="material-symbols-outlined">forum</span>
          </Link>
          <Link href={`/userProfile/${currentUser}`}>
            <img src={userData.avatar}></img>
          </Link>
          <Logout />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default RightSection;
