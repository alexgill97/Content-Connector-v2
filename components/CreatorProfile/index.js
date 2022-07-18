import React from 'react';

import styles from '../../styles/creator_profile.module.scss';

const index = ({ profile }) => {
  console.log(profile);
  const { avatar, city, description, username, uid } = profile;

  return (
    <div className={styles.creator_profile_container}>
      <div className={styles.profile_left}></div>
      <div className={styles.profile_main}>
        <div className={styles.profile_header}></div>
        <div className={styles.profile_interface}></div>
      </div>
    </div>
  );
};

export default index;
