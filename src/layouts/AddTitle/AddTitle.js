import React, { useState } from 'react';
import './styles.css';
import { Button, CanselIcon, Textarea } from '../../components';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import {
  changeUserActivity,
  createCard,
  createList,
  setCLose,
} from '../../redux/slices/listSlice';

export const AddTitle = ({
  idList,
  selectedBoard,
  placeholder = 'Enter a title for this card',
  buttonTitle = 'Add card',
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const handleClose = id => {
    if (id !== undefined) {
      dispatch(setCLose({ idList, selectedBoard }));
    } else {
      dispatch(setCLose());
    }
  };
  const handleCreate = id => {
    if (name !== '') {
      if (id !== undefined) {
        dispatch(createCard({ selectedBoard, idList, name }));
        dispatch(setCLose({ idList, selectedBoard }));
        dispatch(changeUserActivity('created card'));
      } else {
        dispatch(createList({ name, selectedBoard }));
        dispatch(setCLose());
        dispatch(changeUserActivity('created list'));
      }
    }
  };

  const handleTextarea = text => {
    setName(text);
  };
  return (
    <div className={classNames('add__title')}>
      <Textarea
        placeholder={placeholder}
        type="add__title"
        id={idList}
        typeHandle="card-title"
        handleTextarea={handleTextarea}
      />
      <div className="wrapper__button">
        <Button handleCreate={() => handleCreate(idList)}>{buttonTitle}</Button>
        <CanselIcon handleClose={() => handleClose(idList)} />
      </div>
    </div>
  );
};
