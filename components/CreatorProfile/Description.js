import React from 'react';
import styles from '../../styles/creator_profile.module.scss';
import Editor from '../TextEditor';

const Description = ({ description }) => {
  return (
    <span className={styles.interface_description}>
      <Editor />
    </span>
  );
};

export default Description;
