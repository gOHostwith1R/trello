import React from 'react';
import './styles.css';
import { Card, ListActions, Textarea } from '../../components';
import { HeaderList } from '../../components/HeaderList/HeaderList';
import { AddCard } from '../AddCard';
import { AddTitle } from '../AddTitle';
import { ListWrapper } from '../ListWrapper';

export const List = ({ name, isAdd, id, cards, isListActionsOpen }) => {
  return (
    <ListWrapper>
      <HeaderList idList={id} isListActionsOpen={isListActionsOpen}>
        <Textarea
          type="list__header"
          placeholder={name}
          value={name}
          autoFocus={0}
        />
      </HeaderList>
      {cards.map((card, index) => (
        <Card
          name={card.name}
          key={index}
          isEdit={card.isEdit}
          idCard={card.id}
          idList={id}
        />
      ))}
      {isAdd ? <AddTitle id={id} /> : <AddCard id={id} />}
      {isListActionsOpen && <ListActions idList={id} />}
    </ListWrapper>
  );
};
