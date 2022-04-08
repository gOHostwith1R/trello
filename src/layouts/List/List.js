import React from 'react';
import './styles.css';
import { AddCard, Textarea } from '../../components';
import { HeaderList } from '../../components/HeaderList/HeaderList';

export const List = () => (
  <div className="list">
    <HeaderList>
      <Textarea type="list__header" placeholder="To Do" value="To Do" />
    </HeaderList>
    <AddCard />
  </div>
);
