import React, { useState } from 'react';
import './styles.css';
import { Button, Textarea } from '../../components';
import { Delete } from '../../components/Delete';
import { useDispatch } from 'react-redux';
import {
  closeEditBoard,
  deleteBoard,
  editBoard,
} from '../../redux/slices/listSlice';

export const EditBoard = ({ name, idBoard }) => {
  const [text, setText] = useState(name);
  const dispatch = useDispatch();
  const handleTextarea = text => {
    setText(text);
  };
  const handleSaveEditBoard = () => {
    dispatch(editBoard({ text, idBoard }));
    dispatch(closeEditBoard(idBoard));
  };

  const handleDeleteBoard = () => {
    dispatch(closeEditBoard(idBoard));
    dispatch(deleteBoard(idBoard));
  };
  return (
    <div className="wrapper__edit-card">
      <div className="edit__card">
        <Textarea
          value={name}
          type="edit__card"
          handleTextarea={handleTextarea}
        />
      </div>
      <div className="wrapper__buttons">
        <Button type="edit__button" handleSaveEditCard={handleSaveEditBoard}>
          Save
        </Button>
        <Delete name="Delete board" handleDelete={handleDeleteBoard} />
      </div>
    </div>
  );
};
