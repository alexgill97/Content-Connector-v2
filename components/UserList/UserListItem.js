import Link from 'next/link';
import styles from '../../styles/user_list.module.scss';
import React, { useEffect, useState } from 'react';
import { where, collectionGroup } from 'firebase/firestore';
import { firestore } from '../../firebase/clientApp';
import { query, getDocs } from 'firebase/firestore';
import Carousel from '../Carousel/';

const UserListItem = ({ user, username, uid, avatar, description }) => {
  const [loading, setLoading] = useState(true);
  const [portfolio, setPortfolio] = useState([]);
  let portfolioImages = [];

  useEffect(() => {
    getUserPortfolio(uid);
  }, []);

  const getUserPortfolio = async (id) => {
    const querySnapshot = await getDocs(
      query(collectionGroup(firestore, `portfolio`), where('uid', '==', id))
    );
    querySnapshot.forEach((doc) => {
      portfolioImages.push(doc.data().image);
    });
    setPortfolio(portfolioImages);
    setLoading(false);
    console.log(portfolioImages.length);
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <main className={styles.card_container}>
          <Carousel uid={uid} images={portfolio} />
          <section className={styles.card_info}>
            <div className={styles.card__header}>
              <Link href={`userprofile/${uid}`}>
                <img className={styles.card_avatar} src={avatar} alt="" />
              </Link>
              <div className={styles.card_username}>
                <h3>{username}</h3>
              </div>
            </div>
            <div className={styles.card__description}>
              <p>{description}</p>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default UserListItem;
