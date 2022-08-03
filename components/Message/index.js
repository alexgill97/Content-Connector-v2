import React, { useState, useEffect, useRef } from 'react';
import { firestore } from '../../firebase/clientApp';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';

import styles from '../../styles/messages.module.scss';
import Header from './Header';
import MessageForm from './MessageForm';
import MessagesRender from './MessagesRender';

const MessageContainer = ({ currentUser, selectedUser, setSelectedUser }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [messageId, setMessageId] = useState('');

  useEffect(() => {
    getMessages();
  }, [selectedUser]);

  const getMessages = async () => {
    //Set unique message ID
    const msgId =
      currentUser > selectedUser.uid
        ? `${currentUser + selectedUser.uid}`
        : `${selectedUser.uid + currentUser}`;
    setMessageId(msgId);
    //Get messages between current user and selected user
    const msgsRef = collection(firestore, 'messages', msgId, 'chat');
    const messagesQuery = query(msgsRef, orderBy('createdAt', 'asc'));
    onSnapshot(messagesQuery, (messagesSnapshot) => {
      let msgs = [];
      messagesSnapshot.forEach((doc) => {
        msgs.push(doc.data());
      });
      setMessages(msgs);
      setLoading(false);
    });
  };

  return (
    <div className={styles.messages_render_container}>
      <Header selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
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
