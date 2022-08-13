import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/user_list.module.scss';
import Carousel from '../Carousel/';
import getUserPortfolio from '../../firebase/getUserPortfolio';

const UserListItem = ({
  username,
  uid,
  avatar,
  description,
  city,
  images,
  hourly,
  rating,
}) => {
  const [userPortfolio, setUserPortfolio] = useState([]);
  useEffect(() => {
    if (!images) {
      getUserPortfolio(uid, setUserPortfolio);
    }
  }, []);

  return (
    <>
      <main className={styles.card_container}>
        <Carousel
          uid={uid}
          images={images ? images : userPortfolio[0]?.images}
        />
        <section className={styles.card_info}>
          <div className={styles.card__header}>
            <div className={styles.card__header__info}>
              <Link href={`userprofile/${uid}`}>
                <img className={styles.card_avatar} src={avatar} alt="" />
              </Link>
              <div className={styles.card_username}>
                <p className={styles.card_city}>{city}</p>
                <h3>{username}</h3>
              </div>
            </div>
            <div>
              <div>o</div>
              <div className={styles.card__message}>x</div>
            </div>
          </div>
          <div className={styles.card__description}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
          </div>
          <div className={styles.card__footer}>
            <div>
              <p>rating: {rating?.toPrecision(2)}</p>
              <p>XXXXX</p>
            </div>
            <div>
              <p>hourly</p>
              <p className={styles.card_price}>${hourly}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default UserListItem;
