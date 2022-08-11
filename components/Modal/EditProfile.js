import React, { useState } from 'react';
import styles from '../../styles/modal.module.scss';

const EditProfile = ({}) => {
  const [open, setOpen] = useState(false);
  const [languages, setLanguages] = useState(['english', 'french']);
  const [services, setServices] = useState(['wedding', 'events', 'products']);

  const removeItem = (section, setSection, itemToRemove) => {
    const newSectionArr = section.filter((item) => item !== itemToRemove);
    setSection(newSectionArr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
            <div onClick={() => setOpen(false)} className={styles.modal_close}>
              X
            </div>
            <form onSubmit={handleSubmit} action="">
              <label htmlFor="">Services</label>
              <ul>
                {services.map((service) => (
                  <li>
                    {service}
                    <button
                      onClick={() => removeItem(services, setServices, service)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
              <input type="text" />

              <label htmlFor="">Languages</label>
              <ul>
                {languages.map((service) => (
                  <li>{service}</li>
                ))}
              </ul>
              <input type="text" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default EditProfile;
