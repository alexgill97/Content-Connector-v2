import React, { useState } from 'react';
import setUserRating from '../../firebase/setUserRating';
import styles from '../../styles/modal.module.scss';

const CompletedProject = ({ uid }) => {
  const [open, setOpen] = useState(false);
  const [projectRating, setProjectRating] = useState(0);
  const [review, setReview] = useState('');

  const submitRating = (e) => {
    // e.preventDefault();
    setUserRating(uid, projectRating);
    setOpen(false);
  };
  return (
    <div>
      {!open && <div onClick={setOpen(true)}>Complete Project</div>}
      {open && (
        <div>
          <div className={styles.overlay}></div>
          <div className={styles.modal_container}>
            <form action="">
              <label htmlFor="">Rating</label>
              <input
                type="number"
                value={projectRating}
                onChange={(e) => setProjectRating(e.target.value)}
              />

              <label htmlFor="">Review</label>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
              ></textarea>

              <button onClick={submitRating(uid, projectRating)}>Rating</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompletedProject;
