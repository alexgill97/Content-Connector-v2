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

import MessageForm from '../components/Message/MessageForm';
import UserList from '../components/Message/UserList';
import MessageContainer from '../components/Message';

import Link from 'next/link';
import Navigation from '../components/Message/Navigation';

const Messages = ({ users, creators, businesses }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Creators');
  const { currentUser, userData } = useContext(AuthContext);

  return (
    <main className={styles.messages_main}>
      <div className={styles.selected_messages}>
        {selectedUser && (
          <MessageContainer
            selectedUser={selectedUser}
            currentUser={currentUser}
          />
        )}
      </div>
      <Navigation
        creators={creators}
        businesses={businesses}
        selectedCategory={selectedCategory}
        setSelectedUser={setSelectedUser}
        setSelectedCategory={setSelectedCategory}
      />
    </main>
  );
};

export default Messages;

export async function getStaticProps() {
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
