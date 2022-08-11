import React, { useState } from 'react';
import styles from '../../styles/modal.module.scss';

const EditProfile = ({}) => {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState(['wedding', 'events', 'products']);
  const [newService, setNewService] = useState('');
  const [languages, setLanguages] = useState(['english', 'french']);
  const [newLanguage, setNewLanguage] = useState('');

  const removeItem = (section, setSection, itemToRemove) => {
    const newSectionArr = section.filter((item) => item !== itemToRemove);
    setSection(newSectionArr);
  };

  const addItem = (section, setSection, itemToAdd) => {};

  const handleNewService = () => {
    setServices([...services, newService]);
    setNewService('');
  };

  const handleNewLanguage = () => {
    setLanguages([...languages, newLanguage]);
    setNewLanguage('');
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
              {/* Services */}
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
              <input
                type="text"
                value={newService}
                onChange={(e) => {
                  setNewService(e.target.value);
                }}
              />
              <button onClick={handleNewService}>Add Service</button>

              {/* Languages */}
              <label htmlFor="">Languages</label>
              <ul>
                {languages.map((language) => (
                  <li>
                    {language}{' '}
                    <button
                      onClick={() =>
                        removeItem(languages, setLanguages, language)
                      }
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
              <input
                type="text"
                value={newLanguage}
                onChange={(e) => {
                  setNewLanguage(e.target.value);
                }}
              />
              <button onClick={handleNewLanguage}>Add Language</button>

              {/* Submit Updated Data */}
              <button>Update Profile</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default EditProfile;
