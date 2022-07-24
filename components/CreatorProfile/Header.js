import React, { useState } from 'react';
import CreateProject from '../Modal/CreateProject';
import Message from '../Message';
import styles from '../../styles/creator_profile.module.scss';

const Header = ({ currentUser, profile, username, city }) => {
  const [open, setOpen] = useState(false);
  console.log(profile);
  return (
    <>
      {open && (
        <Message
          currentUser={currentUser}
          selectedUser={profile}
          setSelectedUser={setOpen}
        />
      )}

      {!open && (
        <div className={styles.profile_header_interface}>
          <div className={styles.header_user_info}>
            <h3>{username}</h3>
            <p>{city}</p>
          </div>
          <div className={styles.header_user_rating}>
            <p>Rating</p>
            <p>4.7 X X X X X</p>
          </div>
          <div className={styles.header_buttons}>
            <CreateProject currentUser={currentUser} profile={profile} set />
            <button
              className={styles.header_message_button}
              onClick={() => setOpen(true)}
            >
              Message
            </button>
            <button>Report</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
