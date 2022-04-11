import React from 'react';
import './styles.css';
import { Button, CanselIcon, Textarea } from '../../components';
import classNames from 'classnames';

export const AddTitle = ({
  id,
  rows = 3,
  placeholder = 'Enter a title for this card',
  buttonTitle = 'Add card',
}) => (
  <div className={classNames('add__title')}>
    <Textarea
      placeholder={placeholder}
      type="add__title"
      rows={rows}
      autoFocus={1}
      id={id}
    />
    <div className="wrapper__button">
      <Button>{buttonTitle}</Button>
      <CanselIcon />
    </div>
  </div>
);
