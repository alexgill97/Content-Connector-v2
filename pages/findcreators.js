import React, { useContext, useState } from 'react';
import styles from '../styles/user_list.module.scss';
import UserList from '../components/UserList';
import { collection, query, getDocs } from 'firebase/firestore';

import { getDoc, where } from 'firebase/firestore';

import { firestore } from '../firebase/clientApp';
import { AuthContext } from '../firebase/context';

const findingFreelancers = ({ users }) => {
  const { currentUser, userData } = useContext(AuthContext);
  console.log('user', currentUser);

  return (
    <div className={styles.find_creators_container}>
      <div className={styles.find_creators_header}>
        <h4>Content Creators Near You</h4>
        <div>filter</div>
      </div>
      <UserList users={users} />
    </div>
  );
};

export default findingFreelancers;

export async function getServerSideProps() {
  const querySnapshot = await getDocs(
    query(collection(firestore, 'users'), where('isBusiness', '==', false))
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
