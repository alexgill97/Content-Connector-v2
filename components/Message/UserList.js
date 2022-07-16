import React from 'react';
import User from './User';

const UserList = ({ users, setSelectedUser }) => {
  return (
    <div>
      {users.map(({ uid, username, avatar, city, description }) => (
        <div onClick={() => setSelectedUser(uid)}>
          <User
            key={uid}
            uid={uid}
            username={username}
            avatar={avatar}
            city={city}
            description={description}
          />
        </div>
      ))}
    </div>
  );
};

export default UserList;
