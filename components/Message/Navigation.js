import React, { useState } from 'react';
import styles from '../../styles/messages.module.scss';
import UserList from './UserList';

const Navigation = ({
  creators,
  businesses,
  setSelectedUser,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className={styles.messages_navigation}>
      <h4>Who would you like to message</h4>
      <div className={styles.user_categories}>
        <div onClick={() => setSelectedCategory('Creators')}>Creators</div>
        <div onClick={() => setSelectedCategory('Businesses')}>Businesses</div>
        <div onClick={() => setSelectedCategory('Projects')}>Projects</div>
      </div>
      {selectedCategory === 'Creators' && (
        <UserList users={creators} setSelectedUser={setSelectedUser} />
      )}
      {selectedCategory === 'Businesses' && (
        <UserList users={businesses} setSelectedUser={setSelectedUser} />
      )}
      {selectedCategory === 'Projects' && <UserList />}
    </div>
  );
};

export default Navigation;
