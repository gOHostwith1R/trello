import React from 'react';
import './styles.css';
import { Button, CanselIcon, Textarea } from '../../components';
import classNames from 'classnames';

export const AddTitle = ({ handleAddCloseTitle }) => (
  <div className={classNames('add__title')}>
    <Textarea
      placeholder="Enter a title for this card..."
      type="add__title"
      rows={3}
      handleAddCloseTitle={handleAddCloseTitle}
    />
    <div className="wrapper__button">
      <Button>Add card</Button>
      <CanselIcon handleAddCloseTitle={handleAddCloseTitle} />
    </div>
  </div>
);
