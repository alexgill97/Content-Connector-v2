import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { firestore } from '../firebase/clientApp';

import { collection, query, getDocs } from 'firebase/firestore';
import { AuthContext } from '../firebase/context';
import { doc, getDoc, where } from 'firebase/firestore';
import { useRouter } from 'next/router';
import UserListItem from './UserListItem'

const index = ({ users }) => {
  const { userData, currentUser } = useContext(AuthContext);

  const userList = users.map((x) => (
    
    <UserListItem username={x.username} uid={x.uid} avatar={x.avatar}  />

  ));


  const router = useRouter();
  const { id } = router.query;
  console.log("user is logging:" , users)
  const [profile, setProfile] = useState({});

  const getUserData = async (id) => {
    getDoc(doc(firestore, 'users', id)).then((docSnap) => {
      if (docSnap.exists) {
        setProfile(docSnap.data());
      }
    });
  };

  useEffect(() => {
    getUserData(id);
  }, [id]);

  let { address, avatar, description, isBusiness, isOnline, uid, username } = profile;
  console.log('profile', profile)

  return (
    <div>
      <h1>Freelancers :</h1>
      <ul>{userList}</ul>
    </div>
  );
};
export default index;
