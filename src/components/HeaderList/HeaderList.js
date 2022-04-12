import React from 'react';
import './styles.css';
import { HorizontalMenuIcon } from '../HorizontalMenuIcon';
import { useDispatch } from 'react-redux';
import { openListActions } from '../../redux/slices/listSlice';

export const HeaderList = ({ children, idList, selectedBoard }) => {
  const dispatch = useDispatch();
  return (
    <div className="header__list">
      {children}
      <HorizontalMenuIcon
        handleListActions={() =>
          dispatch(openListActions({ idList, selectedBoard }))
        }
      />
    </div>
  );
};
