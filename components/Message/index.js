import React, { useState, useEffect, useRef } from 'react';

import styles from '../../styles/messages.module.scss';
import Header from './Header';
import MessageForm from './MessageForm';
import MessagesRender from './MessagesRender';
import getUserMessages from '../../firebase/getUserMessages';

const MessageContainer = ({
  currentUser,
  selectedUser,
  selectedUserAvatar,
  selectedUserUsername,
  setSelectedUser,
}) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [messageId, setMessageId] = useState('');

  useEffect(() => {
    getUserMessages(
      currentUser,
      selectedUser,
      setMessages,
      setMessageId,
      setLoading
    );
  }, [selectedUser]);

  return (
    <div className={styles.messages_render_container}>
      <Header
        avatar={selectedUserAvatar}
        username={selectedUserUsername}
        setSelectedUser={setSelectedUser}
      />
      <div className={styles.messages_render_main}>
        {loading && <p>Loading...</p>}
        {messages && (
          <MessagesRender
            currentUser={currentUser}
            messages={messages}
            messageId={messageId}
          />
        )}
      </div>
      <div className={styles.message_form_test}>
        <MessageForm currentUser={currentUser} selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export default MessageContainer;
