import React, { useState } from 'react';
import { AuthContext } from '../firebase/context';
import { firestore, auth, storage } from '../firebase/clientApp';
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from 'firebase/firestore';

import styles from '../styles/messages.module.scss';

import Message from '../components/Message';

import Link from 'next/link';

const Messages = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [hidden, setHidden] = useState(false);

  const clickFunction = (profile) => {
    setSelectedUser(profile);
    setHidden(!hidden);
  };

  return <main className={styles.main_user_messages}></main>;
};

export default Messages;

export async function getServerSideProps() {
  const querySnapshot = await getDocs(
    query(collection(firestore, 'users'), where('city', '==', 'Toronto'))
  );
  let allUsers = [];
  querySnapshot.forEach((doc) => {
    allUsers.push(doc.data());
  });
  return {
    props: {
      users: allUsers,
    },
  };
}
