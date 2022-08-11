import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../firebase/context';
import styles from '../../styles/creator_profile.module.scss';
import Header from './Header';
import Description from './Description';
import Portfolio from './Portfolio';
import Reviews from './Reviews';
import ProfileDetails from './ProfileDetails';
import UploadAvatar from '../Modal/UploadAvatar';

const index = ({ profile }) => {
  const { userData, currentUser } = useContext(AuthContext);

  const [provileNav, setprovileNav] = useState('portfolio');
  const [userSelf, setUserSelf] = useState(false);

  const {
    avatar,
    city,
    description,
    username,
    uid,
    completedProjects,
    rating,
  } = profile;

  useEffect(() => {
    if (profile.uid === currentUser) {
      setUserSelf(true);
    }
  }, []);

  return (
    <div className={styles.creator_profile_container}>
      <div className={styles.profile_left}>
        <img className={styles.profile_avatar} src={avatar} alt="" />
        {userSelf && <UploadAvatar currentUser={currentUser} />}
        <ProfileDetails userData={userData} />
      </div>
      <div className={styles.profile_main}>
        <div className={styles.profile_header}>
          <Header
            currentUser={currentUser}
            userData={userData}
            userSelf={userSelf}
            profile={profile}
            username={username}
            city={city}
            rating={rating}
          />
        </div>
        <div className={styles.profile_interface}>
          <div className={styles.interface_selectors}>
            <p onClick={() => setprovileNav('description')}>Description</p>
            <p onClick={() => setprovileNav('portfolio')}>Portfolio</p>
            <p onClick={() => setprovileNav('reviews')}>Reviews</p>
          </div>

          {provileNav === 'description' && (
            <Description
              description={description}
              uid={uid}
              userSelf={userSelf}
            />
          )}
          {provileNav === 'portfolio' && (
            <Portfolio uid={uid} userSelf={userSelf} />
          )}

          {provileNav === 'reviews' && <Reviews uid={uid} />}
        </div>
      </div>
    </div>
  );
};

export default index;
