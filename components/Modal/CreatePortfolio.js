import React, { useState } from 'react';
import styles from '../../styles/create_portfolio.module.scss';

import { firestore, storage } from '../../firebase/clientApp';
import { doc, setDoc } from 'firebase/firestore';
import { ref, getDownloadURL, uploadString } from 'firebase/storage';

const CreatePortfolio = ({ currentUser }) => {
  const [open, setOpen] = useState(false);
  const [portfolio, setPortfolio] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  let files = [];

  const addImageToPortfolio = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFiles((selectedFiles) => [
        ...selectedFiles,
        readerEvent.target.result,
      ]);
      console.log('selected files', selectedFiles);
    };
  };

  const uploadPortfolioItem = async () => {
    setData({ ...data, uid: currentUser });
    const imageRef = ref(storage, `portfolio/${currentUser}${title}/`);
    await uploadString(imageRef, selectedFiles, 'data_url')
      .then(async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        await setDoc(doc(firestore, 'users', currentUser, 'portfolio', title), {
          title: title,
          image: downloadURL,
          description: description,
          uid: currentUser,
        });
      })
      .then(() => {
        return window.location.reload();
      });
  };

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
                onChange={() => setTitle(e.target.value)}
                type="text"
              />
              <label htmlFor="">Portfolio Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <label htmlFor="">Upload</label>
              <input type="file" onChange={addImageToPortfolio} />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePortfolio;
