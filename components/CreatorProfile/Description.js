import React, { useState, useEffect, useContext } from 'react';

import styles from '../../styles/creator_profile.module.scss';
import TextEditor from '../TextEditor';

const Description = ({ uid }) => {
  const [description, setDescription] = useState('');

  return (
    <div className={styles.interface_description}>
      <TextEditor uid={uid} />
    </div>
  );
};

export default Description;
