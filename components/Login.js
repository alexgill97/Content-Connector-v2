import React from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.module.scss';

const Login = () => {
  return (
    <div className={`${styles.nav_right_signin}`}>
      <Link href="/login">
        <p className={styles.login}>Login</p>
      </Link>
    </div>
  );
};

export default Login;
