import React from 'react';
import './styles.css';
import { PlusIcon } from '../../components';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { setOpen } from '../../redux/slices/listSlice';

export const AddCard = ({ idList, selectedBoard }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={classNames('add__card')}
      onClick={() =>
        dispatch(setOpen({ name: 'card', idList, selectedBoard }))
      }>
      <PlusIcon />
      Add card
    </div>
  );
};
