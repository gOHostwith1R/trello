import React from 'react';
import './styles.css';
import classNames from 'classnames';
import { PlusIcon } from '../../components';
import { useDispatch } from 'react-redux';
import { setOpen } from '../../redux/slices/listSlice';

export const AddList = () => {
  const dispatch = useDispatch();
  return (
    <div
      className={classNames('add__list')}
      onClick={() => dispatch(setOpen({ name: 'list' }))}>
      <PlusIcon />
      Add another list
    </div>
  );
};
