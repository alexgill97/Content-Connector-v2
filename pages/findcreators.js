import React, { useContext, useState } from 'react';
import styles from '../styles/user_list.module.scss';
import UserList from '../components/UserList';
import { collection, query, getDocs, where } from 'firebase/firestore';

import { firestore } from '../firebase/clientApp';
import { AuthContext } from '../firebase/context';
import getTermPortfolio from '../firebase/getTermPortfolio';

const findingFreelancers = ({ users }) => {
  const { currentUser, userData } = useContext(AuthContext);
  const [term, setTerm] = useState('');
  const [portfolios, setPortfolios] = useState([]);
  const [filterParam, setFilterParam] = useState('');

  const searchPortfolios = () => {
    getTermPortfolio(term, setPortfolios);
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
        </div>
        <h4>
          {term ? `${term} ` : 'Top '}Content Creators Near: <br /> Toronto,
          Canada
        </h4>
      </div>
      <UserList
        users={users}
        portfolios={portfolios}
        filterParam={filterParam}
        setFilterParam={setFilterParam}
      />
    </div>
  );
};

export default findingFreelancers;

export async function getStaticProps() {
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
