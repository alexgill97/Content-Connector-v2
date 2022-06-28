import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { firestore } from '../../firebase/clientApp';

// import MyFreelanceProfile from '../../components/profiles/MyFreelanceProfile';
// import MyBusinessProfile from '../../components/profiles/MyBusinessProfile';
// import RandomFreelanceProfile from '../../components/profiles/RandomFreelanceProfile';
// import RandomBusinessProfile from '../../components/profiles/RandomBusinessProfile';

import FreelancerProfile from '../../components/Profiles/FreelancerProfile';
import BusinessProfile from '../../components/Profiles/BusinessProfile';

import {
  doc,
  getDocs,
  query,
  collectionGroup,
  where,
  getDoc,
} from 'firebase/firestore';
import { AuthContext } from '../../firebase/context';

import { useRouter } from 'next/router';

const index = ({ users }) => {
  const { userData, currentUser } = useContext(AuthContext);

  const router = useRouter();
  const { id } = router.query;
  const [profile, setProfile] = useState({});
  const [posts, setPosts] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  const getUserData = async (id) => {
    getDoc(doc(firestore, 'users', id)).then((docSnap) => {
      if (docSnap.exists) {
        setProfile(docSnap.data());
      }
    });
  };

  const getUserPortfolio = async (id) => {
    const querySnapshot = await getDocs(
      query(collectionGroup(firestore, `portfolio`), where('uid', '==', id))
    );
    let allPortfolios = [];
    querySnapshot.forEach((doc) => {
      allPortfolios.push(doc.data());
    });
    setPortfolio(allPortfolios);
  };

  useEffect(() => {
    getUserData(id);
    getUserPortfolio(id);
  }, [id]);

  console.log(profile);

  return (
    <>
      {profile.isBusiness ? (
        <BusinessProfile profile={profile} />
      ) : (
        <FreelancerProfile profile={profile} />
      )}
    </>
  );
};

export default index;
