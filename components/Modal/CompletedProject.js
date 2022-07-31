import React from 'react';
import getUserRating from '../../firebase/getUserRating';

const CompletedProject = () => {
  const rating = () => {
    getUserRating(1, 4.7, 5, 2);
  };
  return (
    <div>
      <button onClick={rating}>Rating</button>
    </div>
  );
};

export default CompletedProject;
