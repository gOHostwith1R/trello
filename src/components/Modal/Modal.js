import React, { useState } from 'react';
import './styles.css';
import { Textarea } from '../Textarea';
import { Button } from '../Button';
import { CanselIcon } from '../CanselIcon';
import { useDispatch } from 'react-redux';
import {
  changeUserActivity,
  closeModalDescriptionCard,
  saveDescriptionNameCard,
} from '../../redux/slices/listSlice';

export const Modal = ({
  name,
  listName,
  description,
  idCard,
  idList,
  selectedBoard,
}) => {
  const [textName, setTextName] = useState('');
  const [textDescription, setTextDescription] = useState('');
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModalDescriptionCard({ idCard, idList, selectedBoard }));
  };

  const handleName = text => {
    setTextName(text);
  };

  const handleDescription = text => {
    setTextDescription(text);
  };
  const handleSaveCard = () => {
    dispatch(closeModalDescriptionCard({ idCard, idList, selectedBoard }));
    dispatch(
      saveDescriptionNameCard({
        idCard,
        idList,
        selectedBoard,
        textDescription,
        textName,
      }),
    );
    dispatch(changeUserActivity('added description'));
  };

  return (
    <div className="modal">
      <div className="title__modal">
        <div className="wrapper__modal-textarea">
          <Textarea
            value={name}
            type="modal__textarea"
            name="name"
            handleTextarea={handleName}
          />
          <CanselIcon handleClose={handleClose} />
        </div>
        <div className="wrapper__modal-list">
          In list <span className="modal-list__name">{listName}</span>
        </div>
      </div>
      <div className="modal__body">
        <span className="modal__description">Description</span>
        <Textarea
          name="description"
          placeholder="Add a more detailed description..."
          value={description}
          type="modal__textarea_description"
          handleTextarea={handleDescription}
        />
      </div>
      <Button className="modal__button" handleCreate={handleSaveCard}>
        Save
      </Button>
    </div>
  );
};
