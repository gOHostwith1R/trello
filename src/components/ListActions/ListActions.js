import React from 'react';
import './styles.css';
import { CanselIcon } from '../CanselIcon';
import { useDispatch } from 'react-redux';
import { closeListActions, deleteList } from '../../redux/slices/listSlice';

export const ListActions = ({ idList }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeListActions(idList));
  };
  return (
    <div className="list__actions">
      <div className="header__list__actions">
        <p className="title__list_actions">List Actions</p>
        <CanselIcon handleClose={handleClose} />
      </div>
      <div className="body__list__actions">
        <p
          className="elem__list_actions"
          onClick={() => dispatch(deleteList(idList))}>
          Delete List
        </p>
      </div>
    </div>
  );
};
