import React, { useContext } from 'react';
import { AuthContext } from '../../firebase/context';
import UserListItem from './UserListItem';
import PortfolioListItem from './PortfolioListItem';
import styles from '../../styles/user_list.module.scss';
const UserList = ({ users, portfolios }) => {
  const { userData, currentUser } = useContext(AuthContext);
  console.log(portfolios);
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
        portfolios.map((portfolio) => <UserListItem portfolio={portfolio} />)}
    </div>
  );
};
export default UserList;
