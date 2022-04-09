import React, { useState } from 'react';
import './styles.css';
import { Textarea } from '../../components';
import { HeaderList } from '../../components/HeaderList/HeaderList';
import { AddCard } from '../AddCard';
import { AddTitle } from '../AddTitle';

export const List = () => {
  const [visibility, setVisibility] = useState(false);
  const handleAddCloseTitle = params => {
    setVisibility(params === 'open');
  };

  return (
    <div className="list">
      <HeaderList>
        <Textarea type="list__header" placeholder="To Do" value="To Do" />
      </HeaderList>
      {!visibility ? (
        <AddCard handleAddCloseTitle={handleAddCloseTitle} />
      ) : (
        <AddTitle handleAddCloseTitle={handleAddCloseTitle} />
      )}
    </div>
  );
};
