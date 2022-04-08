import React from 'react';
import './styles.css';
import { AddCard, Title } from '../../components';
import { HeaderList } from '../../components/HeaderList/HeaderList';

export const List = () => (
  <div className="list">
    <HeaderList>
      <Title type="list__title">To Do</Title>
    </HeaderList>
    <AddCard />
  </div>
);
