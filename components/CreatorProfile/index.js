import React, { useState } from 'react';

import styles from '../../styles/creator_profile.module.scss';
import Header from './Header';
import Description from './Description';
import Portfolio from './Portfolio';
import Reviews from './Reviews';

const index = ({ profile }) => {
  const [provileNav, setprovileNav] = useState('description');
  const { avatar, city, description, username, uid } = profile;

  return (
    <div className={styles.creator_profile_container}>
      <div className={styles.profile_left}>
        <img className={styles.profile_avatar} src={avatar} alt="" />
        <div></div>
      </div>
      <div className={styles.profile_main}>
        <div className={styles.profile_header}>
          <Header username={username} city={city} />
        </div>
        <div className={styles.profile_interface}>
          <div className={styles.interface_selectors}>
            <p onClick={() => setprovileNav('description')}>Description</p>
            <p onClick={() => setprovileNav('portfolio')}>Portfolio</p>
            <p onClick={() => setprovileNav('reviews')}>Reviews</p>
          </div>

          <div>{provileNav === 'description' && <Description />}</div>
          <div>{provileNav === 'portfolio' && <Portfolio />}</div>
          <div>{provileNav === 'reviews' && <Reviews />}</div>
        </div>
      </div>
    </div>
  );
};

export default index;
