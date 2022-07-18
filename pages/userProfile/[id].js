import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { firestore } from '../../firebase/clientApp';

import CreatorProfile from '../../components/CreatorProfile/';
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

const index = ({ profile }) => {
  const { userData, currentUser } = useContext(AuthContext);

  const router = useRouter();
  const { id } = router.query;
  const [posts, setPosts] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  // const getUserPortfolio = async (id) => {
  //   const querySnapshot = await getDocs(
  //     query(collectionGroup(firestore, `portfolio`), where('uid', '==', id))
  //   );
  //   let allPortfolios = [];
  //   querySnapshot.forEach((doc) => {
  //     allPortfolios.push(doc.data());
  //   });
  //   setPortfolio(allPortfolios);
  // };

  // useEffect(() => {
  //   getUserData(id);
  //   getUserPortfolio(id);
  // }, [id]);

  return (
    <>
      {profile.isBusiness ? (
        <BusinessProfile profile={profile} />
      ) : (
        <CreatorProfile profile={profile} />
      )}
    </>
  );
};

export default index;

export async function getServerSideProps({ req }) {
  const [path] = req.url.split('=');
  const [_, subPath, userId] = path.split('/');

  const query = await getDoc(doc(firestore, 'users', userId));
  const profile = query.data();

  return {
    props: {
      profile,
    },
  };
}
