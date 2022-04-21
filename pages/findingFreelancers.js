import React from 'react';
import styles from '../styles/Home.module.scss';
import UserList from '../components/UserList';
import { collection, query, getDocs } from 'firebase/firestore';

import { doc, getDoc, where } from 'firebase/firestore';
import { useRouter } from 'next/router';

import { firestore } from '../firebase/clientApp';

const findingFreelancers = ({ users }) => {

  console.log("findingasdasdada", users)
  
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.aboutBody}`}>
        <div className={`col-sm-8`}>
          <h2>
            <strong>Placeholder for Freelancers</strong>
          </h2>
          <h4>Querying users based on isBusiness:false</h4>
          <div className={`${styles.aboutBody}`}>
            <UserList users={users} />
          </div>
          <p>
            setting a Layout for what's gonna show here from BUSINESS
            PERSPECTIVE. Different users in their own containers, showing their
            portfolio
          </p>
        </div>
        {/* <img
              src="/mapsphoto.jpeg"
              className={`${styles.picture1}`}
            /> */}
      </div>
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
    // console.log(' => ', doc.data());
    allUsers.push(doc.data());
  });
  console.log('allUsers', allUsers);
  return {
    props: {
      users: allUsers,
    },
  };
}