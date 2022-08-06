import React from 'react';
import styles from '../../styles/creator_profile.module.scss';

const ProfileDetails = ({ completedProjects }) => {
  return (
    <div className={styles.profiledetails}>
      <div className={styles.profiledetails_single}>
        <p>Avg. Response Time</p>
        <p>1 hour</p>
      </div>
      <div className={styles.profiledetails_single}>
        <p>Total Successful Projects</p>
        <p>{completedProjects}</p>
      </div>
      <div className={styles.profiledetails_list}>
        <h5>Services</h5>
        <p>Wedding</p>
        <p>Products</p>
        <p>Sports</p>
        <p>Events</p>
      </div>
      <div className={styles.profiledetails_list}>
        <h5>Languages</h5>
        <p>English</p>
        <p>Spanish</p>
      </div>
    </div>
  );
};

export default ProfileDetails;
