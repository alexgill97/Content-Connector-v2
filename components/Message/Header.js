import React from 'react';
import styles from '../../styles/messages.module.scss';

const Header = ({ avatar, username, setSelectedUser }) => {
  return (
    <div className={styles.message_header_container}>
      <div className={styles.message_header_profile}>
        <div>
          <img className={styles.message_header_avatar} src={avatar} alt="" />
        </div>
        <div className={styles.message_header_username}>{username}</div>
      </div>
      <div
        className={styles.message_header_close}
        onClick={() => setSelectedUser(null)}
      >
        <p>X</p>
      </div>
    </div>
  );
};

export default Header;
