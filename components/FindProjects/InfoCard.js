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
    <div className={styles.infocard}>
      {/* Header */}
      <div className={styles.infocard__header}>
        <div className={styles.infocard__header_image}>
          <Link href={`/userprofile/${uid}`}>
            <Image src={avatar} layout="fill" objectFit="cover" />
          </Link>
        </div>
        <div>
          <p>{username}</p>
        </div>
        <div className={styles.infocard__header_info_bottom}>x</div>
      </div>
      {/* Body */}
      <div className={styles.infocard_body}>
        <h5>{postTitle}</h5>
      </div>
      {/* Footer */}
      <div className={styles.infocard__footer}>
        <div className={styles.infocard__footer_budget}>
          <p className={styles.infocard__footer_budget_text}>Budget</p>
          <p>$400</p>
        </div>
        <div className={styles.infocard__footer_buttons}>
          <button onClick={() => setSelectedUser(uid)}>Message</button>
          <button>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
