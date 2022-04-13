import React, { useState } from 'react';
import './styles.css';
import { useDispatch } from 'react-redux';
import { changeBoard, openEditBoard } from '../../redux/slices/listSlice';
import { EditBoard } from '../../layouts';

export const Board = ({ name, idBoard, isEdit }) => {
  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState(false);
  const handleEditBoard = () => {
    dispatch(openEditBoard(idBoard));
  };

  const handleChangeBoard = () => {
    dispatch(changeBoard(idBoard));
  };

  return (
    <div
      className="name__board"
      onMouseEnter={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}
      onClick={handleChangeBoard}>
      {name}
      <div className="pen__wrapper" onClick={handleEditBoard}>
        {visibility && (
          <img
            className="pen__card"
            src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-pen-education-dreamstale-lineal-dreamstale.png"
            alt="pen"
          />
        )}
      </div>
      {isEdit && <EditBoard name={name} idBoard={idBoard} />}
    </div>
  );
};
