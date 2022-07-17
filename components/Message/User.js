import React from 'react';
import styles from '../../styles/messages.module.scss';

const User = ({ uid, username, avatar, city, description }) => {
  return (
    <div className={styles.message_card_container}>
      <img className={styles.message_card_image} src={avatar} alt="" />

      <div className={styles.message_card_info}>
        <p>{username}</p>
      </div>
    </div>
  );
};

export default User;
