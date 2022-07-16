import React from 'react';

const User = ({ uid, username, avatar, city, description }) => {
  return (
    <div>
      <div>
        <img src={avatar} alt="" />
      </div>
      <div>
        <p>{username}</p>
        <p>{city}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default User;
