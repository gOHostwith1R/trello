import React from 'react';
import './styles.css';
import classNames from 'classnames';

export const PlusIcon = ({ type, handleCreate }) => (
  <div
    className={classNames('plus-icon', {
      navigation__plus: type === 'navigation',
    })}
    onClick={handleCreate}
  />
);
