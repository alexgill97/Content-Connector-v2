import React, { useState, useEffect } from 'react';
import setUserRating from '../../firebase/setUserRating';
import styles from '../../styles/modal.module.scss';

const CompletedProject = ({ userData, projectTitle, creatorUid }) => {
  const [open, setOpen] = useState(false);
  const [projectRating, setProjectRating] = useState(0);

  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const submitRating = (e) => {
    e.preventDefault();

    setUserRating(creatorUid, projectRating, review);
    setOpen(false);
  };
  return (
    <div>
      {!open && (
        <div onClick={() => setOpen(true)}>
          <button>Complete Project</button>
        </div>
      )}
      {open && (
        <div>
          <div className={styles.overlay}></div>
          <div className={styles.modal_container}>
            <form onSubmit={handleSubmit} action="">
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

              <button onClick={submitRating}>Rating</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompletedProject;
