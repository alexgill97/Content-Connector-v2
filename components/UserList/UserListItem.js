import Link from 'next/link';
import styles from '../../styles/user_list.module.scss';
import Carousel from '../Carousel/';

const UserListItem = ({ user, username, uid, avatar, description, city }) => {
  return (
    <>
      <main className={styles.card_container}>
        <Carousel uid={uid} />
        <section className={styles.card_info}>
          <div className={styles.card__header}>
            <Link href={`userprofile/${uid}`}>
              <img className={styles.card_avatar} src={avatar} alt="" />
            </Link>
            <div className={styles.card_username}>
              <h3>{username}</h3>
              <p className={styles.card_city}>{city}</p>
              <p className={styles.card_price}>$12.50</p>
            </div>
          </div>
          <div className={styles.card__description}>
            <p>{description}</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default UserListItem;
