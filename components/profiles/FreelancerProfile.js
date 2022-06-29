import React from 'react';
import Image from 'next/image';

import styles from '../../styles/freelancerProfile.module.scss';

const FreelancerProfile = ({ profile }) => {
  console.log(profile);
  return (
    <main className={styles.profile_container}>
      <div className={styles.profile_main}>
        <div className={styles.profile_header}>
          <p>Photographer</p>
          <p>{profile.username}</p>
          <p>Based in: {profile.city}</p>
        </div>
        <div className={styles.avatar_container}>
          {profile.avatar && (
            <Image
              className={styles.avatar_image}
              src={profile.avatar}
              layout="fill"
            />
          )}
        </div>
        <div className={styles.message_container}>
          <button>Message</button>
        </div>
      </div>
      <div>
        <h4></h4>
      </div>
      <div>
        <h4>Reviews</h4>
      </div>
    </main>
  );
};

export default FreelancerProfile;
