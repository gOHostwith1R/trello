import React from 'react';
import classNames from 'classnames';
import './styles.css';

export const Title = ({ children, type }) => (
  <h1 className={classNames({ list__title: type === 'list__title' })}>
    {children}
  </h1>
);
