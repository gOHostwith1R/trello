import React from 'react';
import './styles.css';
import { PlusIcon } from '../../components';
import classNames from 'classnames';

export const AddCard = ({ handleAddCloseTitle }) => {
  return (
    <>
      <div
        className={classNames('add__card')}
        onClick={() => handleAddCloseTitle('open')}>
        <PlusIcon />
        Add card
      </div>
    </>
  );
};
