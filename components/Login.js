import React from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.module.scss';

const Login = () => {
  return (
    <>
      <Link href="/login">
        <p className={styles.login}>Login</p>
      </Link>
    </>
  );
};

export default Login;
