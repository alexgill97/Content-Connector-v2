import React, { useEffect } from 'react';
import { useState } from 'react';

import uploadFileWithProgress from '../../../firebase/uploadFileWithProgress';
import addDocument from '../../../firebase/addDocument';

const ProgressItem = ({ file, currentUser }) => {
  const [progress, setProgress] = useState(0);
  const [imageURL, setImageURL] = useState(null);
  console.log(file);
  useEffect(() => {
    const uploadImage = async () => {
      try {
        const url = await uploadFileWithProgress(
          file,
          `portfolio/${currentUser}`,
          file.name,
          setProgress
        );
        const galleryDoc = {
          imageURL: url,
          uid: currentUser,
          uEmail: 'test@test.com',
          uName: 'John',
          uPhoto: '',
        };
        await addDocument('portfolio', galleryDoc, currentUser);
        setImageURL(null);
      } catch (error) {
        alert(error.message);
        console.log(error);
      }
    };
    setImageURL(URL.createObjectURL(file));
    uploadImage();
  }, [file]);
  return (
    imageURL && (
      <>
        <img src={imageURL} alt="images gallery" loading="lazy" />
      </>
    )
  );
};

export default ProgressItem;

const backDrop = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(0,0,0,.5)',
};
