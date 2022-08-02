import React, { useState, useContext } from 'react';
import { AuthContext } from '../../firebase/context';
import { firestore, storage } from '../../firebase/clientApp';
import { addDoc, updateDoc, collection, doc } from 'firebase/firestore';
import {
  ref,
  getDownloadURL,
  uploadString,
  uploadBytesResumable,
} from 'firebase/storage';
import { useRouter } from 'next/router';
import styles from '../../styles/modal.module.scss';

const UploadAvatar = ({ currentUser }) => {
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const router = useRouter();

  const selectUserAvatar = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  // ======================
  const uploadUserAvatar = async () => {
    const imageRef = ref(storage, `avatar/${currentUser}/image`);

    await uploadString(imageRef, selectedFile, 'data_url').then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(firestore, 'users', currentUser), {
          avatar: downloadURL,
        }).then(() => {
          return window.location.reload();
        });
      }
    );
    setSelectedFile(null);
  };
  return (
    <div>
      {!open && (
        <div>
          <button onClick={() => setOpen(true)}>Upload Avatar</button>
        </div>
      )}

      {open && (
        <div>
          <div className={styles.overlay}></div>
          <div className={styles.modal_container}>
            <h3 className={styles.uploadAvatar}>Upload An Avatar</h3>
            <div>
              {selectedFile ? (
                <img
                  src={selectedFile}
                  onDoubleClick={() => setSelectedFile(null)}
                  alt=""
                  className={styles.image}
                />
              ) : null}
            </div>
            <div>
              <input type="file" onChange={selectUserAvatar} />
            </div>
            <div>
              <button className={styles.button} onClick={uploadUserAvatar}>
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadAvatar;
