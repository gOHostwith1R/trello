import React from 'react';
import './styles.css';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { setCLose } from '../../redux/slices/listSlice';

export const Textarea = ({
  type,
  placeholder,
  value,
  visibility = true,
  rows,
  autoFocus,
  id,
}) => {
  const dispatch = useDispatch();
  const handleChangeTextarea = e => {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleKeydown = e => {
    e.key === 'Enter' && e.preventDefault();
  };
  return (
    <textarea
      autoFocus={autoFocus}
      className={classNames('textarea', {
        list__header: type === 'list__header',
        hidden: !visibility,
        add__title__textarea: type === 'add__title',
      })}
      placeholder={placeholder}
      rows={rows || 1}
      defaultValue={value}
      onChange={handleChangeTextarea}
      onKeyDown={handleKeydown}
      onBlur={() => {
        if (id !== undefined) {
          dispatch(setCLose(id));
        } else {
          dispatch(setCLose());
        }
      }}
    />
  );
};
