import React, { useState } from 'react';
import './styles.css';
import { Textarea } from '../Textarea';
import { useDispatch } from 'react-redux';
import { setEditCard } from '../../redux/slices/listSlice';
import { EditCard } from '../../layouts';

export const Card = ({ name, isEdit, idCard, idList }) => {
  const [visibility, setVisibility] = useState(false);
  const dispatch = useDispatch();
  return (
    <div
      className="card"
      onMouseEnter={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}>
      <Textarea type="textarea__card" value={name} edit={isEdit} />
      <div
        className="pen__wrapper"
        onClick={() => dispatch(setEditCard({ idCard, idList }))}>
        {visibility && (
          <img
            className="pen__card"
            src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-pen-education-dreamstale-lineal-dreamstale.png"
            alt="pen"
          />
        )}
      </div>
      {isEdit && <EditCard value={name} idCard={idCard} idList={idList} />}
    </div>
  );
};
