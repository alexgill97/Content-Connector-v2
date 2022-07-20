import React from 'react';
import styles from '../../styles/creator_profile.module.scss';
import Editor from '../TextEditor';

const Description = ({ description }) => {
  return (
    <div className={styles.interface_description}>
      <Editor />
    </div>
  );
};

export default Description;
