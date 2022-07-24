import React, { useState, useContext } from 'react';
import { AuthContext } from '../../firebase/context';
import styles from '../../styles/creator_profile.module.scss';
import Header from './Header';
import Description from './Description';
import Portfolio from './Portfolio';
import Reviews from './Reviews';
import ProfileDetails from './ProfileDetails';

const index = ({ profile }) => {
  const { userData, currentUser } = useContext(AuthContext);

  const [provileNav, setprovileNav] = useState('portfolio');
  const { avatar, city, description, username, uid } = profile;

  return (
    <div className={styles.creator_profile_container}>
      <div className={styles.profile_left}>
        <img className={styles.profile_avatar} src={avatar} alt="" />
        <ProfileDetails />
      </div>
      <div className={styles.profile_main}>
        <div className={styles.profile_header}>
          <Header
            currentUser={currentUser}
            profile={profile}
            username={username}
            city={city}
          />
        </div>
        <div className={styles.profile_interface}>
          <div className={styles.interface_selectors}>
            <p onClick={() => setprovileNav('description')}>Description</p>
            <p onClick={() => setprovileNav('portfolio')}>Portfolio</p>
            <p onClick={() => setprovileNav('reviews')}>Reviews</p>
          </div>

          {provileNav === 'description' && (
            <Description description={description} uid={uid} />
          )}
          {provileNav === 'portfolio' && <Portfolio uid={uid} />}

          {provileNav === 'reviews' && <Reviews />}
        </div>
      </div>
    </div>
  );
};

export default index;
