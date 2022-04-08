import React from 'react';
import './styles.css';
import { HorizontalMenuIcon } from '../HorizontalMenuIcon';

export const HeaderList = ({ children }) => (
  <div className="header__list">
    {children}
    <HorizontalMenuIcon />
  </div>
);
