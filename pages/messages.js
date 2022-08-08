import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../firebase/context';
import { firestore } from '../firebase/clientApp';
import { collection, query, where, getDocs } from 'firebase/firestore';

import styles from '../styles/messages.module.scss';

import MessageContainer from '../components/Message';

import Link from 'next/link';
import Navigation from '../components/Message/Navigation';

import getCreatorProjects from '../firebase/getCreatorProjects';
import getBusinessProjects from '../firebase/getBusinessProjects';

const Messages = ({ users, creators, businesses }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Creators');
  const [userProjects, setUserProjects] = useState([]);
  const { currentUser, userData } = useContext(AuthContext);

  useEffect(() => {
    if (userData.isBusiness) {
      getBusinessProjects(currentUser, setUserProjects);
    } else {
      getCreatorProjects(currentUser, setUserProjects);
    }
  }, []);

  return (
    <main className={styles.messages_main}>
      <div className={styles.selected_messages}>
        {selectedUser && (
          <MessageContainer
            selectedUser={selectedUser}
            currentUser={currentUser}
            setSelectedUser={setSelectedUser}
          />
        )}
      </div>
      <Navigation
        creators={creators}
        businesses={businesses}
        projects={userProjects}
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
    businesses.push(doc.data());
  });

  return {
    props: {
      creators: creators,
      businesses: businesses,
    },
  };
}
