import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/user_list.module.scss';
import Carousel from '../Carousel/';
import Message from '../Message';
import getUserPortfolio from '../../firebase/getUserPortfolio';
import addFavorite from '../../firebase/addFavorite';

const UserListItem = ({
  currentUser,
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
  const [messageOpen, setMessageOpen] = useState(false);

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
        {!messageOpen && (
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
                <div
                  onClick={() =>
                    addFavorite(currentUser, uid, username, avatar)
                  }
                >
                  o
                </div>
                <div
                  onClick={() => setMessageOpen(!messageOpen)}
                  className={styles.card__message}
                >
                  x
                </div>
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
                <p>
                  <span className={styles.rating_text}>Rating </span>
                  <span className={styles.rating_number}>
                    {rating?.toPrecision(2).toString()}
                  </span>
                </p>
                <p>XXXXX</p>
              </div>
              <div>
                <p className={styles.card_hourly_text}>hourly</p>
                <p className={styles.card_hourly_price}>${hourly}</p>
              </div>
            </div>
          </section>
        )}

        {messageOpen && (
          <Message
            currentUser={currentUser}
            selectedUserId={uid}
            selectedUserAvatar={avatar}
            selectedUserUsername={username}
            setSelectedUser={setMessageOpen}
          />
        )}
      </main>
    </>
  );
};

export default UserListItem;
