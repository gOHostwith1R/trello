import React from 'react';
import './styles.css';

export const Button = ({ children, handleCreateTitleList }) => (
  <button className="button" onClick={handleCreateTitleList}>
    {children}
  </button>
);
