import React from 'react';
import styles from '../../styles/modal.module.scss';

const EditProfile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {!open && (
        <div onClick={() => setOpen(true)}>
          <button>Edit Profile</button>
        </div>
      )}
      {open && (
        <div>
          <div className={styles.overlay}></div>
          <div className={styles.modal_container}>
            <form action="">Test</form>
          </div>
        </div>
      )}
    </div>
  );
};
export default EditProfile;
