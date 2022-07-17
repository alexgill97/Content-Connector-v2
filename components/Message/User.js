import React from 'react';
import styles from '../../styles/messages.module.scss';

const User = ({ user }) => {
  return (
    <div className={styles.message_card_container}>
      <img className={styles.message_card_image} src={user.avatar} alt="" />

      <div className={styles.message_card_info}>
        <p>{user.username}</p>
      </div>
    </div>
  );
};

export default User;
