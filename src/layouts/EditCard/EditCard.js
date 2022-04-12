import React, { useState } from 'react';
import './styles.css';
import { Button, Textarea } from '../../components';
import { useDispatch } from 'react-redux';
import {
  closeEditCard,
  deleteCard,
  editCard,
} from '../../redux/slices/listSlice';
import { Delete } from '../../components/Delete';

export const EditCard = ({ value, idCard, idList, selectedBoard }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const handleTextarea = text => {
    setText(text);
  };
  const handleSaveEditCard = () => {
    dispatch(editCard({ idCard, idList, text, selectedBoard }));
    dispatch(closeEditCard({ idCard, idList, selectedBoard }));
  };

  const handleDeleteCard = () => {
    dispatch(closeEditCard({ idCard, idList, selectedBoard }));
    dispatch(deleteCard({ idCard, idList, selectedBoard }));
  };
  return (
    <div className="wrapper__edit-card">
      <div className="edit__card">
        <Textarea
          value={value}
          type="edit__card"
          handleTextarea={handleTextarea}
        />
      </div>
      <div className="wrapper__buttons">
        <Button type="edit__button" handleSaveEditCard={handleSaveEditCard}>
          Save
        </Button>
        <Delete handleDelete={handleDeleteCard} name="Delete card" />
      </div>
    </div>
  );
};
