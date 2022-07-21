import React, { useState, useEffect } from 'react';
import styles from '../../styles/creator_profile.module.scss';
import { firestore } from '../../firebase/clientApp';
import { collectionGroup, query, getDocs, where } from 'firebase/firestore';

import Carousel from '../Carousel';

const Portfolio = ({ uid }) => {
  const [loading, setLoading] = useState(true);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    getUserPortfolio(uid);
  }, [uid]);

  const getUserPortfolio = async (id) => {
    const querySnapshot = await getDocs(
      query(collectionGroup(firestore, `portfolio`), where('uid', '==', id))
    );
    let portfolioImages = [];
    querySnapshot.forEach((doc) => {
      portfolioImages.push(doc.data().image);
    });

    setPortfolio(portfolioImages);
    setLoading(false);
    console.log(portfolioImages.length);
  };

  return (
    <div className={styles.interface_portfolio}>
      <div className={styles.portfolio_list}>portfolio list</div>
      <div className={styles.portfolio_render}>
        <div className={styles.portfolio_carousel}>
          {loading && <div>loading...</div>}
          {portfolio && <Carousel images={portfolio} />}
        </div>
        <div className={styles.portfolio_description}>
          portfolio description
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
