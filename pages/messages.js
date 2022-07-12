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
import UserList from '../components/Message/UserList';

import Link from 'next/link';

const Messages = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Creators');
  const [hidden, setHidden] = useState(false);

  const clickFunction = (profile) => {
    setSelectedUser(profile);
    setHidden(!hidden);
  };

  return (
    <main className={styles.messages_container}>
      <div className={styles.selected_messages}>Messages</div>
      <div className={styles.messages_navigation}>
        <h4>Who would you like to message</h4>
        <div className={styles.user_categories}>
          <div onClick={() => setSelectedCategory('Creators')}>Creators</div>
          <div onClick={() => setSelectedCategory('Businesses')}>
            Businesses
          </div>
          <div onClick={() => setSelectedCategory('Projects')}>Projects</div>
        </div>
        {selectedCategory === 'Creators' && <UserList users={users} />}
        {selectedCategory === 'Businesses' && <UserList />}
        {selectedCategory === 'Projects' && <UserList />}
      </div>
    </main>
  );
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
