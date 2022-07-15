import React, { useState, useContext } from 'react';
import { AuthContext } from '../firebase/context';
import { firestore } from '../firebase/clientApp';
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from 'firebase/firestore';

import styles from '../styles/messages.module.scss';

import Message from '../components/Message';
import MessageForm from '../components/Message/MessageForm';
import UserList from '../components/Message/UserList';
import MessageContainer from '../components/Message/MessageContainer';

import Link from 'next/link';

const Messages = ({ users, creators, businesses }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Creators');
  const [hidden, setHidden] = useState(false);
  const { currentUser, userData } = useContext(AuthContext);

  console.log(businesses);

  const clickFunction = (profile) => {
    setSelectedUser(profile);
    setHidden(!hidden);
  };

  return (
    <main className={styles.messages_container}>
      <div className={styles.selected_messages}>
        {selectedUser && (
          <MessageContainer
            selectedUser={selectedUser}
            currentUser={currentUser}
          />
        )}
        <MessageForm selectedUser={selectedUser} currentUser={currentUser} />
      </div>
      <div className={styles.messages_navigation}>
        <h4>Who would you like to message</h4>
        <div className={styles.user_categories}>
          <div onClick={() => setSelectedCategory('Creators')}>Creators</div>
          <div onClick={() => setSelectedCategory('Businesses')}>
            Businesses
          </div>
          <div onClick={() => setSelectedCategory('Projects')}>Projects</div>
        </div>
        {selectedCategory === 'Creators' && (
          <UserList users={creators} setSelectedUser={setSelectedUser} />
        )}
        {selectedCategory === 'Businesses' && (
          <UserList users={businesses} setSelectedUser={setSelectedUser} />
        )}
        {selectedCategory === 'Projects' && <UserList />}
      </div>
    </main>
  );
};

export default Messages;

export async function getServerSideProps() {
  const usersRef = collection(firestore, 'users');

  //Get Creators Data from Firestore
  const creatorsQuery = query(
    usersRef,
    where('city', '==', 'Toronto'),
    where('isBusiness', '==', false)
  );
  const creatorsSnapshot = await getDocs(creatorsQuery);
  const creators = [];
  creatorsSnapshot.forEach((doc) => {
    creators.push(doc.data());
  });

  //Get Businesses Data from Firestore
  const businessesQuery = query(
    usersRef,
    where('city', '==', 'Toronto'),
    where('isBusiness', '==', true)
  );
  const businessesSnapshot = await getDocs(businessesQuery);
  const businesses = [];
  businessesSnapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
    businesses.push(doc.data());
  });

  //Get Users Projects from Firestore

  return {
    props: {
      creators: creators,
      businesses: businesses,
    },
  };
}
