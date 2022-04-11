import React, { useState } from 'react';
import './styles.css';

export const Card = ({ name }) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <div
      className="card"
      onMouseEnter={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}>
      <p>{name}</p>
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
