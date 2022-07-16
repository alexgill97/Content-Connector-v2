import React, { useRef, useEffect } from 'react';
// import Moment from "react-moment";
import styles from '../../styles/messages.module.scss';

const MessageItem = ({ currentUser, to, from, text, createdAt, media }) => {
  return (
    <>
      {from === currentUser ? (
        <p className={styles.message_currentUser}>{text}</p>
      ) : (
        <p className={styles.message_selectedUser}>{text}</p>
      )}
    </>
  );
};

export default MessageItem;
