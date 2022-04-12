import React from 'react';
import { Board, PlusIcon } from '../../components';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddBoard } from '../AddBoard';
import { openCreateBoard } from '../../redux/slices/listSlice';

export const Navigation = ({ boards }) => {
  const dispatch = useDispatch();
  const creteNewBoard = useSelector(state => state.list.creteNewBoard);
  return (
    <nav className="navigation">
      <div className="navigation__wrapper">
        <p className="title__navigation">Your boards</p>
        <PlusIcon
          type="navigation"
          handleCreate={() => dispatch(openCreateBoard())}
        />
      </div>
      <div className="wrapper__board__names">
        {boards.map(board => (
          <Board name={board.name} key={board.id} />
        ))}
      </div>
      {creteNewBoard && <AddBoard />}
    </nav>
  );
};
