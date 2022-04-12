import React from 'react';
import './styles.css';

export const HorizontalMenuIcon = ({ handleListActions }) => (
  <div className="wrapper-horizontal__menu" onClick={handleListActions}>
    <span className="horizontal__menu" />
  </div>
);
