import React, { useState } from 'react';
import styles from '../../styles/create_project.module.scss';

const CreateProject = ({ currentUser, uid }) => {
  const [open, setOpen] = useState(false);

  const createProject = async (e) => {
    e.preventDefault();
    setOpen(false);
  };
  return (
    <div className={styles.create_project_container}>
      {!open && <button onClick={() => setOpen(true)}>Create Project</button>}
      {open && (
        <>
          <div className={styles.overlay} />
          <div className={styles.create_project_modal}>
            <form onSubmit={createProject} action="submit">
              <label htmlFor="">
                Project Name
                <input type="text" />
              </label>
              <label htmlFor="">
                Project Name
                <input type="text" />
              </label>
              <label htmlFor="">
                Project Name
                <input type="text" />
              </label>

              <button>Create Project</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default CreateProject;
