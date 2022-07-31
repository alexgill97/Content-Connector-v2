import React, { useContext } from 'react';
import { AuthContext } from '../../firebase/context';
import UserListItem from './UserListItem';
import styles from '../../styles/user_list.module.scss';
const UserList = ({ users, portfolios }) => {
  const { userData, currentUser } = useContext(AuthContext);

  return (
    <div className={styles.user_list_container}>
      {!portfolios.length &&
        users.map((user) => (
          <UserListItem
            key={user.uid}
            username={user.username}
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
