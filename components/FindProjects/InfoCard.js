import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/find_projects.module.scss';

const InfoCard = ({
  uid,
  setSelectedUser,
  avatar,
  username,
  postTitle,
  description,
  address,
}) => {
  return (
    <div className={styles.info_card_container}>
      <div className={styles.info_card_image}>
        <Link href={`/userprofile/${uid}`}>
          <Image src={avatar} layout="fill" objectFit="cover" />
        </Link>
      </div>
      <div
        className={styles.info_card_info}
        onClick={() => setSelectedUser(uid)}
      >
        <h3>{username}</h3>
        <h5>{postTitle}</h5>
        <div className={styles.info_card_right_title_empty}></div>
        <p>{description}</p>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default InfoCard;
