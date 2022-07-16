import React, { useState, useEffect, useRef } from 'react';
import { firestore } from '../../firebase/clientApp';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';

import styles from '../../styles/messages.module.scss';
import MessageForm from './MessageForm';
import MessagesRender from './MessagesRender';

const MessageContainer = ({ currentUser, selectedUser }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const scroll = useRef();

  //Set unique message ID

  useEffect(() => {
    getMessages();
  }, [selectedUser]);

  const getMessages = async () => {
    const messageId =
      currentUser > selectedUser
        ? `${currentUser + selectedUser}`
        : `${selectedUser + currentUser}`;

    //Get messages between current user and selected user
    const msgsRef = collection(firestore, 'messages', messageId, 'chat');
    const messagesQuery = query(msgsRef, orderBy('createdAt', 'asc'));
    onSnapshot(messagesQuery, (messagesSnapshot) => {
      let msgs = [];
      messagesSnapshot.forEach((doc) => {
        msgs.push(doc.data());
      });
      setMessages(msgs);
      setLoading(false);
    });

    // // get last message between logged in user and selected user
    // const docSnap = await getDoc(doc(firestore, 'lastMsg', id));
    // // if last message exists and message is from selected user
    // if (docSnap.data() && docSnap.data().from !== user1) {
    //   // update last message doc, sets unread to false
    //   await updateDoc(doc(firestore, 'lastMsg', id), { unread: false });
    // }
  };

  return (
    <div className={styles.messages_render_container}>
      <div>header</div>
      <div className={styles.messages_render_main}>
        {loading && <p>Loading...</p>}
        {messages && (
          <MessagesRender currentUser={currentUser} messages={messages} />
        )}
      </div>
      <div className={styles.message_form_test}>
        <MessageForm currentUser={currentUser} selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export default MessageContainer;
