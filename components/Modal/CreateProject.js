import React, { useState, useEffect } from 'react';
import setProject from '../../firebase/setProject';
import styles from '../../styles/create_project.module.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateProject = ({ currentUser, userData, profile }) => {
  const [open, setOpen] = useState(false);
  const [projectTitle, setProjectTitle] = useState('');
  const [projectOffer, setProjectOffer] = useState(0);
  const [projectCity, setProjectCity] = useState(userData.city);
  const [projectLocation, setProjectLocation] = useState(userData.address);
  const [projectOutline, setProjectOutline] = useState('');
  const [completedBy, setCompletedBy] = useState(new Date());
  const [projectMediaType, setProjectMediaType] = useState('both');
  const [projectCategory, setProjectCategory] = useState('brand');

  const createProject = async (e) => {
    e.preventDefault();
    setProject(
      userData,
      profile,
      projectTitle,
      projectOffer,
      projectCity,
      projectLocation,
      projectOutline,
      completedBy,
      projectMediaType,
      projectCategory
    );
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
              {/* Media Type */}
              <label htmlFor="">Project Media Type</label>
              <select onChange={(e) => setProjectMediaType(e.target.value)}>
                <option value="both">Photography + Videography</option>
                <option value="photo">Photography</option>
                <option value="video">Videography</option>
              </select>

              {/* Category */}
              <select onChange={() => setProjectCategory(e.target.value)}>
                <option value="brand">Brand</option>
                <option value="product">Product</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="realEstate">Real Estate</option>
                <option value="automotive">Automotive</option>
                <option value="portrait">Portrait</option>
                <option value="events">Event</option>
                <option value="sports">Sport</option>
                <option value="fashion">Fashion</option>
              </select>

              {/* Budget */}
              <label htmlFor="">Project Budget</label>
              <input
                className={styles.budget_input_min}
                value={projectOffer}
                onChange={(e) => setProjectOffer(Number(e.target.value))}
                type="number"
              />

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
