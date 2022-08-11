import React, { useState } from 'react';
import CreateProject from '../Modal/CreateProject';
import Message from '../Message';
import styles from '../../styles/creator_profile.module.scss';

const Header = ({
  currentUser,
  userData,
  profile,
  userSelf,
  username,
  city,
  rating,
}) => {
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
            <div className={styles.header_username}>
              <h3>{username}</h3>
              {userSelf && <button>Edit Profile</button>}
            </div>
            <p>{city}</p>
          </div>
          <div className={styles.header_user_rating}>
            <p>Rating</p>
            {rating ? (
              <p>{rating.toPrecision(2)} X X X X X</p>
            ) : (
              <p>No projects completed</p>
            )}
          </div>
          <div className={styles.header_buttons}>
            <CreateProject
              currentUser={currentUser}
              userData={userData}
              profile={profile}
            />
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
