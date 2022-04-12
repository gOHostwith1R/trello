import React, { useState } from 'react';
import './styles.css';
import { Button, CanselIcon, Textarea } from '../../components';
import { useDispatch } from 'react-redux';
import { closeCreateBoard, createBoard } from '../../redux/slices/listSlice';

export const AddBoard = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleCreate = () => {
    dispatch(createBoard(text));
    dispatch(closeCreateBoard());
  };

  const handleTextarea = text => {
    setText(text);
  };
  return (
    <div className="add__board">
      <div className="header__board">
        <p className="title__board">Create Board</p>
        <CanselIcon handleClose={() => dispatch(closeCreateBoard())} />
      </div>
      <div className="body__board">
        <Textarea
          placeholder="Board title"
          type="create__board"
          handleTextarea={handleTextarea}
        />
        <Button handleCreate={handleCreate}>Create Board</Button>
      </div>
    </div>
  );
};
