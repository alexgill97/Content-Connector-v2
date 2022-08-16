import React from 'react';
import styles from '../../styles/creator_profile.module.scss';

const ProfileDetails = ({ userData }) => {
  return (
    <div className={styles.profiledetails}>
      <div className={styles.profiledetails__single}>
        <p>Avg. Response Time</p>
        <p>1 hour</p>
      </div>
      <div className={styles.profiledetails__single}>
        <p>Total Successful Projects</p>
        <p>{userData.completedProjects || 0}</p>
      </div>
      <div className={styles.profiledetails__list}>
        <div className={styles.profiledetails__services_header}>
          <h5>Services</h5>
          <p># completed</p>
        </div>
        {userData.services?.map((service) => (
          <div className={styles.profiledetails__services_list}>
            <p key={service}>{service}</p>
            <p> 4</p>
          </div>
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
