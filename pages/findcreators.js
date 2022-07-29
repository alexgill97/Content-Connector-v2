import React, { useContext, useState } from 'react';
import styles from '../styles/user_list.module.scss';
import UserList from '../components/UserList';
import { collection, query, getDocs } from 'firebase/firestore';
import { getDoc, where } from 'firebase/firestore';

import { firestore } from '../firebase/clientApp';
import { AuthContext } from '../firebase/context';
import getTermPortfolio from '../firebase/getTermPortfolio';

const findingFreelancers = ({ users }) => {
  const { currentUser, userData } = useContext(AuthContext);
  const [term, setTerm] = useState('');
  const [portfolios, setPortfolios] = useState([]);

  const searchPortfolios = () => {
    console.log(term);
    getTermPortfolio(term, setPortfolios);
  };

  const logPortfolio = () => {
    console.log(portfolios);
  };

  return (
    <div className={styles.find_creators_container}>
      <div className={styles.find_creators_header}>
        <div>
          <h4>What kind of photographer are you looking for?</h4>
          <input
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
            type="text"
          />
          <button onClick={searchPortfolios}>Search</button>
          <button onClick={logPortfolio}>Log</button>
        </div>
        <h4>
          Content Creators Near: <br /> Toronto, Canada
        </h4>
        <div>
          <p>filter</p>
        </div>
      </div>
      <UserList users={users} portfolios={portfolios} />
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
