import React, { useState } from 'react';
import './styles.css';
import { Textarea } from '../Textarea';

export const Card = ({ name, isEdit }) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <div
      className="card"
      onMouseEnter={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}>
      <Textarea type="textarea__card" value={name} edit={isEdit} />
      <div className="pen__wrapper">
        {visibility && (
          <img
            className="pen__card"
            src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-pen-education-dreamstale-lineal-dreamstale.png"
            alt="pen"
          />
        )}
      </div>
    </div>
  );
};
