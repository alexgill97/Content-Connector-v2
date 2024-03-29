import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/find_projects.module.scss';
import addFavorite from '../../firebase/addFavorite';
import { AuthContext } from '../../firebase/context';
import CreateProject from '../Modal/CreateProject';
import ApplyProject from '../Modal/ApplyProject';

const InfoCard = ({
  projectId,
  uid,
  setSelectedUser,
  avatar,
  username,
  postTitle,
  projectOffer,
  description,
  address,
  setSelectedApplyProjectId,
}) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className={styles.infocard}>
      {/* --Header-- */}
      <div className={styles.infocard__header}>
        <div>
          {/* Header Image */}
          <div className={styles.infocard__header_image}>
            <Link href={`/userprofile/${uid}`}>
              <Image src={avatar} layout="fill" objectFit="cover" />
            </Link>
          </div>
          {/* Header Username */}
          <p className={styles.infocard__header_username}>{username}</p>
        </div>
        <div
          onClick={() => addFavorite(currentUser, uid, username, avatar)}
          className={styles.infocard__header_favorite}
        >
          x
        </div>
      </div>
      {/* --Body-- */}
      <div className={styles.infocard__body}>
        <p>{postTitle}</p>
      </div>
      {/* --Footer-- */}
      <div className={styles.infocard__footer}>
        <div className={styles.infocard__footer_budget}>
          {/* Budget */}
          <p className={styles.infocard__footer_budget_text}>Budget</p>
          <p>${projectOffer}</p>
        </div>
        <div className={styles.infocard__footer_buttons}>
          {/* Buttons */}
          <button onClick={() => setSelectedUser(uid)}>Message</button>
          <button onClick={() => setSelectedApplyProjectId(projectId)}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
