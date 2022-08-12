import React, { useContext, useState } from 'react';
import { AuthContext } from '../../firebase/context';
import UserListItem from './UserListItem';
import styles from '../../styles/user_list.module.scss';
const UserList = ({ users, portfolios, filterParam }) => {
  const { userData, currentUser } = useContext(AuthContext);

  return (
    <div className={styles.user_list_container}>
      {!portfolios.length &&
        users
          .sort((a, b) => (a.username.length < b.username.length ? 1 : -1))
          .map((user) => (
            <UserListItem
              key={user.uid}
              username={user.username}
              rating={user.rating}
              uid={user.uid}
              avatar={user.avatar}
              user={user}
              city={user.city}
            ></UserListItem>
          ))}

      {portfolios.length &&
        portfolios.map(({ images, username, uid, avatar }) => (
          <UserListItem
            key={uid}
            images={images}
            username={username}
            uid={uid}
            avatar={avatar}
          />
        ))}
    </div>
  );
};
export default UserList;
