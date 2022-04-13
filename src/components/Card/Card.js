import React, { useState } from 'react';
import './styles.css';
import { Textarea } from '../Textarea';
import { useDispatch } from 'react-redux';
import {
  openModalDescriptionCard,
  setEditCard,
} from '../../redux/slices/listSlice';
import { EditCard } from '../../layouts';
import { Modal } from '../Modal';

export const Card = ({
  name,
  isEdit,
  idCard,
  idList,
  selectedBoard,
  isOpenModal,
  description,
  listName,
}) => {
  const [visibility, setVisibility] = useState(false);
  const dispatch = useDispatch();
  const handleOpenModalDescription = () => {
    dispatch(openModalDescriptionCard({ idCard, idList, selectedBoard }));
  };
  return (
    <>
      <div
        className="card"
        onMouseEnter={() => setVisibility(true)}
        onMouseLeave={() => setVisibility(false)}
        onClick={handleOpenModalDescription}>
        <Textarea type="textarea__card" value={name} edit={isEdit} />
        <div
          className="pen__wrapper"
          onClick={() =>
            dispatch(setEditCard({ idCard, idList, selectedBoard }))
          }>
          {visibility && (
            <img
              className="pen__card"
              src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-pen-education-dreamstale-lineal-dreamstale.png"
              alt="pen"
            />
          )}
        </div>
        {isEdit && (
          <EditCard
            value={name}
            idCard={idCard}
            idList={idList}
            selectedBoard={selectedBoard}
          />
        )}
      </div>
      {isOpenModal && (
        <Modal
          name={name}
          description={description}
          idCard={idCard}
          listName={listName}
          idList={idList}
          selectedBoard={selectedBoard}
        />
      )}
    </>
  );
};
