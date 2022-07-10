import React, { useContext } from 'react';
import { AuthContext } from '../../firebase/context';
import UserListItem from './UserListItem';
import styles from '../../styles/user_list.module.scss';
const UserList = ({ users }) => {
  const { userData, currentUser } = useContext(AuthContext);

  return (
    <div className={styles.user_list_container}>
      {users.map((user) => (
        <UserListItem
          key={user.uid}
          username={user.username}
          uid={user.uid}
          avatar={user.avatar}
          user={user}
        ></UserListItem>
      ))}
    </div>
  );
};
export default UserList;
