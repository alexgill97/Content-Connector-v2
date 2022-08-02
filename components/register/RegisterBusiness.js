import { useRouter, useEffect } from 'next/router';
import { AuthContext } from '../../firebase/context';
import React, { useState, useContext } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { firestore } from '../../firebase/clientApp';
import Geocode from 'react-geocode';
import styles from '../../styles/Register.module.scss';

const RegisterBusiness = ({ userId, setLoading, setStep }) => {
  const router = useRouter();
  const { currentUser, userData } = useContext(AuthContext);
  Geocode.setApiKey('AIzaSyDoeEVfzN1WC3vwiDlF7HemOu35NQao-kY');
  Geocode.setLanguage('en');
  Geocode.setRegion('na');

  const [data, setData] = useState({
    isBusiness: true,
    username: '',
    description: '',
    avatar: '',
    address: '',
    lat: '',
    lng: '',
    city: '',
    uid: currentUser,
    isOnline: true,
  });

  const registerUserDb = async (currentUser, formData) => {
    await setDoc(doc(firestore, 'users', currentUser), {
      ...formData,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onRegisterSubmit = (e) => {
    e.preventDefault();
    // setLoading(true);
    // setStep(3);

    Geocode.fromAddress(data.address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        const formData = { ...data, lat: lat, lng: lng };
        registerUserDb(currentUser, formData);
      },
      (error) => {
        console.error(error);
      }
    );
    // setLoading(false);
  };

  return (
    <section>
      <form>
        <div className="input_container">
          <label>Enter Business Name: </label>
          <input
            type="username"
            name="username"
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </div>
        <div className="input_container">
          <label>Description: </label>
          <input
            type="description"
            name="description"
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
        </div>
        <div className="input_container">
          <label>Address: </label>
          <input
            type="address"
            name="address"
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
        </div>
        <div className="input_container">
          <label>City: </label>
          <input
            type="city"
            name="city"
            onChange={(e) => setData({ ...data, city: e.target.value })}
          />
        </div>
        <button className={styles.button} onClick={onRegisterSubmit}>
          Register
        </button>
      </form>
    </section>
  );
};

export default RegisterBusiness;
