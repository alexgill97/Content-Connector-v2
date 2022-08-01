import React from 'react';
import setUserRating from '../../firebase/setUserRating';

const CompletedProject = () => {
  const rating = () => {
    setUserRating(1, 4.7, 5, 2);
  };
  return (
    <div>
      <button onClick={rating}>Rating</button>
    </div>
  );
};

export default CompletedProject;
