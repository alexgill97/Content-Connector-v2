import React, { useState } from 'react';
import Attachment from './svg/Attachment';
import { firestore, auth, storage } from '../../firebase/clientApp';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { collection, addDoc, Timestamp, setDoc, doc } from 'firebase/firestore';

import styles from '../../styles/messages.module.scss';

const MessageForm = ({ currentUser, selectedUserId, scroll }) => {
  const [text, setText] = useState('');
  const [img, setImg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id =
      currentUser > selectedUserId
        ? `${currentUser + selectedUserId}`
        : `${selectedUserId + currentUser}`;

    let url;
    if (img) {
      const imgRef = ref(
        storage,
        `images/${new Date().getTime()} - ${img.name}`
      );
      const snap = await uploadBytes(imgRef, img);
      const downloadUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
      url = downloadUrl;
    }

    await addDoc(collection(firestore, 'messages', id, 'chat'), {
      text,
      messageType: 'dm',
      from: currentUser,
      to: selectedUserId,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || '',
    });

    await setDoc(doc(firestore, 'lastMsg', id), {
      text,
      from: currentUser,
      to: selectedUserId,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || '',
      unread: true,
    });
    setText('');
  };

  return (
    <div className={styles.message_form_container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label htmlFor="img">
          <Attachment />
        </label>
        <input
          onChange={(e) => setImg(e.target.files[0])}
          type="file"
          id="img"
          accept="image/*"
          style={{ display: 'none' }}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default MessageForm;
