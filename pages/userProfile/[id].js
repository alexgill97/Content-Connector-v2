import React from 'react';
import styles from '../../styles/creator_profile.module.scss';
import { firestore } from '../../firebase/clientApp';

import CreatorProfile from '../../components/CreatorProfile/';
import BusinessProfile from '../../components/Profiles/BusinessProfile';

import { doc, getDoc } from 'firebase/firestore';

const index = ({ profile }) => {
  return (
    <div className={styles.userprofile}>
      {profile.isBusiness ? (
        <BusinessProfile profile={profile} />
      ) : (
        <CreatorProfile profile={profile} />
      )}
    </div>
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
