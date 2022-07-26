import React, { useState, useEffect, useContext, useRef } from 'react';
import styles from '../../../styles/create_portfolio.module.scss';

import { AuthContext } from '../../../firebase/context';
import { firestore, storage } from '../../../firebase/clientApp';
import { doc, setDoc } from 'firebase/firestore';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';

const index = ({}) => {
  const { userData, currentUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [urls, setUrls] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addImageToPortfolio = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      setSelectedFiles((prevState) => [...prevState, e.target.files[i]]);
    }
  };

  const uploadPortfolioItem = async () => {
    if (!selectedFiles) return;
    selectedFiles.forEach((file) => {
      const storageRef = ref(
        storage,
        `portfolio/${currentUser}/${title}/${file.name}`
      );
      const upload = uploadBytesResumable(storageRef, file);
      upload.on(
        'state_changed',
        (snapShot) => {
          const progress =
            (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          reject(error);
        },
        async () => {
          try {
            const url = await getDownloadURL(storageRef);
            setUrls((prevState) => [...prevState, url]);
          } catch (error) {
            reject(error);
          }
        }
      );
    });
  };

  useEffect(() => {
    const uploadUrls = async () => {
      await setDoc(
        doc(firestore, 'users', currentUser, 'portfolio', title),
        {
          title: title,
          images: urls,
          description: description,
          uid: currentUser,
        },
        { merge: true }
      );
      setOpen(false);
      setTitle('');
      setDescription('');
      setSelectedFiles([]);
      setUrls([]);
    };

    if (urls.length === selectedFiles.length && urls.length) {
      uploadUrls();
    }
  }, [urls]);

  return (
    <>
      {!open && <button onClick={() => setOpen(true)}>Upload</button>}
      {open && (
        <div>
          <div className={styles.overlay}></div>
          <div className={styles.create_portfolio_modal}>
            <h5>Create Portfolio</h5>
            <form action="">
              <label htmlFor="">Portfolio Name</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
              />
              <label htmlFor="">Portfolio Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <label htmlFor="">Upload</label>
              <input type="file" multiple onChange={addImageToPortfolio} />
              {progress}
            </form>
            <div>
              <button onClick={uploadPortfolioItem}>Upload Portfolio</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default index;
