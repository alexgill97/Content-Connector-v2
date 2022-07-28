import { setDoc, addDoc, collection, doc, Timestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { firestore } from '../../firebase/clientApp';
import styles from '../../styles/create_project.module.scss';

const CreateProject = ({ currentUser, profile }) => {
  const [open, setOpen] = useState(false);
  const [projectTitle, setProjectTitle] = useState('');
  const [projectOffer, setProjectOffer] = useState(0);
  const [projectOutline, setProjectOutline] = useState('');

  console.log(profile, currentUser);

  const createProject = async (e) => {
    e.preventDefault();
    const projectId =
      currentUser > profile.uid
        ? `${currentUser + profile.uid}`
        : `${profile.uid + currentUser}`;
    const creator = profile.isBusiness ? currentUser : profile.uid;
    const business = profile.isBusiness ? profile.uid : currentUser;

    await setDoc(doc(firestore, 'projects', projectId), {
      creator,
      business,
      projectTitle,
      projectOffer,
      projectOutline,
      createdAt: Timestamp.fromDate(new Date()),
      accepted: false,
    });

    await setDoc(doc(firestore, 'messages', projectId, 'chat', projectTitle), {
      text: projectOutline,
      from: currentUser,
      to: profile.uid,
      createdAt: Timestamp.fromDate(new Date()),
      projectTitle,
      projectOffer,

      accepted: false,
    });

    setOpen(false);
  };
  return (
    <>
      {!open && <button onClick={() => setOpen(true)}>Create Project</button>}
      {open && (
        <div>
          <div className={styles.overlay}></div>
          <div className={styles.create_project_modal}>
            <div
              onClick={() => setOpen(false)}
              className={styles.create_project_modal_close}
            >
              X
            </div>
            <div className={styles.create_project_header}>
              <p>Proposal For:</p>
              <h5>{profile.username}</h5>
            </div>
            <form
              className={styles.form_container}
              onSubmit={createProject}
              action="submit"
            >
              <label htmlFor="">Describe Your Project</label>
              <input
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                type="text"
              />
              <label htmlFor="">Project Budget</label>
              <label htmlFor="">
                $
                <input
                  className={styles.budget_input_min}
                  value={projectOffer}
                  onChange={(e) => setProjectOffer(e.target.value)}
                  type="number"
                />
              </label>
              <label htmlFor="">Outline Your Project</label>
              <textarea
                value={projectOutline}
                onChange={(e) => setProjectOutline(e.target.value)}
                className={styles.form_outline}
              />

              <button>Create Project</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateProject;
