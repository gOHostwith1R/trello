import React from 'react';
import { Board, PlusIcon } from '../../components';
import './styles.css';

export const Navigation = ({ boards }) => (
  <nav className="navigation">
    <div className="navigation__wrapper">
      <p className="title__navigation">Your boards</p>
      <PlusIcon type="navigation" />
    </div>
    <div className="wrapper__board__names">
      {boards.map(board => (
        <Board name={board.name} key={board.id} />
      ))}
    </div>
  </nav>
);
