import React from 'react';
import './styles.css';
import { Card, Textarea } from '../../components';
import { HeaderList } from '../../components/HeaderList/HeaderList';
import { AddCard } from '../AddCard';
import { AddTitle } from '../AddTitle';
import { ListWrapper } from '../ListWrapper';

export const List = ({ name, isAdd, id }) => {
  return (
    <ListWrapper>
      <HeaderList>
        <Textarea
          type="list__header"
          placeholder={name}
          value={name}
          autoFocus={0}
        />
      </HeaderList>
      <Card />
      {isAdd ? <AddTitle id={id} /> : <AddCard id={id} />}
    </ListWrapper>
  );
};
