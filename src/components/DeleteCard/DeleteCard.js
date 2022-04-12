import React from 'react';
import './styles.css';
import { useDispatch } from 'react-redux';
import { closeEditCard, deleteCard } from '../../redux/slices/listSlice';

export const DeleteCard = ({ idCard, idList, selectedBoard }) => {
  const dispatch = useDispatch();
  const handleDeleteCard = (idCard, idList) => {
    dispatch(closeEditCard({ idCard, idList, selectedBoard }));
    dispatch(deleteCard({ idCard, idList, selectedBoard }));
  };
  return (
    <div
      className="delete__card"
      onClick={() => handleDeleteCard(idCard, idList)}>
      Delete Card
    </div>
  );
};
