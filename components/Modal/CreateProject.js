import {
  setDoc,
  collection,
  addDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';
import React, { useState, useEffect } from 'react';

import { firestore } from '../../firebase/clientApp';
import styles from '../../styles/create_project.module.scss';
import DatePicker from 'react-datepicker';
import Geocode from 'react-geocode';

import 'react-datepicker/dist/react-datepicker.css';

const CreateProject = ({ currentUser, userData, profile }) => {
  const [open, setOpen] = useState(false);
  const [projectTitle, setProjectTitle] = useState('');
  const [projectOffer, setProjectOffer] = useState(0);
  const [projectCity, setProjectCity] = useState(userData.city);
  const [projectLocation, setProjectLocation] = useState(userData.address);
  const [projectOutline, setProjectOutline] = useState('');
  const [completedBy, setCompletedBy] = useState(new Date());
  console.log(userData);

  Geocode.setApiKey('AIzaSyDoeEVfzN1WC3vwiDlF7HemOu35NQao-kY');
  Geocode.setLanguage('en');
  Geocode.setRegion('na');

  const createProject = async (e) => {
    e.preventDefault();
    const messagesId =
      currentUser > profile.uid
        ? `${currentUser + profile.uid}`
        : `${profile.uid + currentUser}`;
    const creator = profile.isBusiness ? currentUser : profile.uid;
    const business = profile.isBusiness ? profile.uid : currentUser;

    let projectCoordinates = {};

    Geocode.fromAddress(projectLocation).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        projectCoordinates = { lat: lat, lng: lng };
        console.log(projectCoordinates);
      },
      (error) => {
        console.error(error);
      }
    );

    const docRef = doc(collection(firestore, 'messages', messagesId, 'chat'));

    await setDoc(docRef, {
      projectId: docRef.id,
      text: projectOutline,
      from: currentUser,
      to: profile.uid,
      createdAt: serverTimestamp(),
      completedBy,
      projectTitle,
      projectOffer,
      businessAvatar: userData.avatar,
      accepted: false,
      completed: false,
      city: projectCity,
      projectLocation,
      projectCoordinates,
    });
    await setDoc(doc(firestore, 'projects', docRef.id), {
      projectId: docRef.id,
      creatorId: creator,
      businessId: business,
      businessUsername: profile.username,
      messagesId,
      projectTitle,
      projectOffer,
      text: projectOutline,
      businessAvatar: userData.avatar,
      createdAt: serverTimestamp(),
      completedBy,
      accepted: false,
      completed: false,
      city: projectCity,
      projectLocation,
      projectCoordinates,
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
              {/* Project Title */}
              <label htmlFor="">Project Title</label>
              <input
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                type="text"
              />
              {/* Project Budget */}
              <label htmlFor="">Project Budget</label>
              <label htmlFor="">
                <input
                  className={styles.budget_input_min}
                  value={projectOffer}
                  onChange={(e) => setProjectOffer(e.target.value)}
                  type="number"
                />
              </label>
              {/* Project Completion Date */}
              <label htmlFor="">Completed By</label>
              <DatePicker
                selected={completedBy}
                onChange={(date) => setCompletedBy(date)}
              />
              {/* Project City */}
              <label htmlFor="">Project City</label>
              <input
                type="text"
                value={projectCity}
                onChange={(e) => setProjectCity(e.target.value)}
              />
              {/* Project Address */}
              <label htmlFor="">Project Address</label>
              <input
                type="address"
                value={projectLocation}
                onChange={(e) => setProjectLocation(e.target.value)}
              />

              {/* Project Outline */}
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
