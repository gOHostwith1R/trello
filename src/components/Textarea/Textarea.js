import React from 'react';
import './styles.css';
import classNames from 'classnames';

export const Textarea = ({ type, placeholder, value }) => {
  const handleChangeTextarea = e => {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleKeydown = e => {
    e.key === 'Enter' && e.preventDefault();
  };
  return (
    <textarea
      className={classNames('textarea', {
        list__header: type === 'list__header',
      })}
      placeholder={placeholder}
      rows={1}
      defaultValue={value}
      onChange={handleChangeTextarea}
      onKeyDown={handleKeydown}
    />
  );
};
