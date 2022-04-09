import React from 'react';
import './styles.css';
import classNames from 'classnames';

export const Textarea = ({
  type,
  placeholder,
  value,
  visibility = true,
  rows,
  handleAddCloseTitle,
}) => {
  const handleChangeTextarea = e => {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleKeydown = e => {
    e.key === 'Enter' && e.preventDefault();
  };
  return (
    <textarea
      autoFocus
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
      onBlur={handleAddCloseTitle}
    />
  );
};
