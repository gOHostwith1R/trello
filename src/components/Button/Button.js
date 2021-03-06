import React from 'react';
import './styles.css';
import classNames from 'classnames';

export const Button = ({
  children,
  handleCreate,
  type,
  handleSaveEditCard,
}) => (
  <button
    className={classNames('button', {
      edit__button: type === 'edit__button',
    })}
    onClick={() => {
      if (type === 'edit__button') {
        handleSaveEditCard();
      } else {
        handleCreate();
      }
    }}>
    {children}
  </button>
);
