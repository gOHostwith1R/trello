import React from 'react';
import './styles.css';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../redux/slices/listSlice';

export const DeleteCard = ({ idCard, idList }) => {
  const dispatch = useDispatch();
  const handleDeleteCard = (idCard, idList) => {
    dispatch(deleteCard({ idCard, idList }));
  };
  return (
    <div
      className="delete__card"
      onClick={() => handleDeleteCard(idCard, idList)}>
      Delete Card
    </div>
  );
};
