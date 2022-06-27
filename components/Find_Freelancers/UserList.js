import React, { useContext } from 'react';
import { AuthContext } from '../../firebase/context';
import UserListItem from './UserListItem';
import styles from '../../styles/UserList1.module.scss';
const UserList = ({ users }) => {
  const { userData, currentUser } = useContext(AuthContext);

  const userList = users.map((user) => (
    <UserListItem
      key={user.uid}
      username={user.username}
      uid={user.uid}
      avatar={user.avatar}
      user={user}
    ></UserListItem>
  ));

  return <div className={styles.cards}>{userList}</div>;
};
export default UserList;
