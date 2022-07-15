import React, { useRef, useEffect } from 'react';
// import Moment from "react-moment";
import styles from '../../styles/messages.module.scss';

const MessageItem = ({ currentUser, to, from, text, createdAt, media }) => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [text]);

  return (
    <>
      {from === currentUser ? (
        <div className={styles.message_currentUser}>{text}</div>
      ) : (
        <div className={styles.message_selectedUser}>{text}</div>
      )}
    </>
  );
};

export default MessageItem;
