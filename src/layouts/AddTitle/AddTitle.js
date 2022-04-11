import React, { useState } from 'react';
import './styles.css';
import { Button, CanselIcon, Textarea } from '../../components';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { createCard, createList, setCLose } from '../../redux/slices/listSlice';

export const AddTitle = ({
  id,
  rows = 3,
  placeholder = 'Enter a title for this card',
  buttonTitle = 'Add card',
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const handleClose = id => {
    if (id !== undefined) {
      dispatch(setCLose(id));
    } else {
      dispatch(setCLose());
    }
  };

  const handleCreateTitleList = id => {
    if (name !== '') {
      if (id !== undefined) {
        dispatch(createCard({ id, name }));
        dispatch(setCLose(id));
      } else {
        dispatch(createList(name));
        dispatch(setCLose());
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
        rows={rows}
        autoFocus={1}
        id={id}
        handleTextarea={handleTextarea}
      />
      <div className="wrapper__button">
        <Button handleCreateTitleList={() => handleCreateTitleList(id)}>
          {buttonTitle}
        </Button>
        <CanselIcon handleClose={() => handleClose(id)} />
      </div>
    </div>
  );
};
