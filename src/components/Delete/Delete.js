import React from 'react';
import './styles.css';

export const Delete = ({ handleDelete, name }) => {
  return (
    <div className="delete__card" onClick={handleDelete}>
      {name}
    </div>
  );
};
