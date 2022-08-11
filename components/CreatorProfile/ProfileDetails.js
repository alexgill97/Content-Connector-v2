import React from 'react';
import styles from '../../styles/creator_profile.module.scss';

const ProfileDetails = ({ userData }) => {
  return (
    <div className={styles.profiledetails}>
      <div className={styles.profiledetails_single}>
        <p>Avg. Response Time</p>
        <p>1 hour</p>
      </div>
      <div className={styles.profiledetails_single}>
        <p>Total Successful Projects</p>
        <p>{userData.completedProjects || 0}</p>
      </div>
      <div className={styles.profiledetails_list}>
        <h5>Services</h5>
        {userData.services?.map((service) => (
          <p key={service}>{service}</p>
        ))}
      </div>
      <div className={styles.profiledetails_list}>
        <h5>Languages</h5>
        {userData.languages?.map((language) => (
          <p key={language}>{language}</p>
        ))}
      </div>
    </div>
  );
};

export default ProfileDetails;
