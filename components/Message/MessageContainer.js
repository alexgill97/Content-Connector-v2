import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebase/clientApp';
import {
  getDocs,
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  Timestamp,
  orderBy,
  setDoc,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';

import MessageItem from './MessageItem';

const MessageContainer = ({ currentUser, selectedUser }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <div>
      {loading && <p>Loading...</p>}
      {messages &&
        messages.map(({ to, from, text, createdAt, media }) => (
          <MessageItem
            key={createdAt}
            currentUser={currentUser}
            to={to}
            from={from}
            text={text}
            createdAt={createdAt}
            media={media}
          />
        ))}
    </div>
  );
};

export default MessageContainer;
