import React from 'react';
import './styles.css';
import classNames from 'classnames';

export const Textarea = ({
  type,
  value,
  visibility = true,
  placeholder,
  edit = true,
  handleTextarea,
}) => {
  const handleChangeTextarea = e => {
    if (type !== 'list__header') {
      handleTextarea(e.target.textContent);
    }
  };

  const handleKeydown = e => {
    e.key === 'Enter' && e.preventDefault();
  };
  return (
    <div
      contentEditable={edit}
      placeholder={placeholder}
      suppressContentEditableWarning={true}
      className={classNames('textarea', {
        list__header: type === 'list__header',
        hidden: !visibility,
        add__title__textarea: type === 'add__title',
        textarea__card: type === 'textarea__card',
        edit__card_textarea: type === 'edit__card',
      })}
      onInput={handleChangeTextarea}
      onKeyDown={handleKeydown}>
      {value}
    </div>
  );
};
