import React, { useContext, useState } from 'react';
import styles from '../styles/findFreelancers.module.scss';
import UserList from '../components/Find_Freelancers/UserList';
import { collection, query, getDocs } from 'firebase/firestore';

import { getDoc, where } from 'firebase/firestore';

import { firestore } from '../firebase/clientApp';
import { AuthContext } from '../firebase/context';

const findingFreelancers = ({ users }) => {
  const { currentUser, userData } = useContext(AuthContext);

  const [profile, setProfile] = useState({});
  const [portfolio, setPortfolio] = useState({});

  return (
    <div className={styles.container}>
      <h1>Content Creators Near You</h1>
      <UserList users={users} profile={profile} />
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
