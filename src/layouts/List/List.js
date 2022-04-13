import React from 'react';
import './styles.css';
import { Card, ListActions, Textarea } from '../../components';
import { HeaderList } from '../../components/HeaderList/HeaderList';
import { AddCard } from '../AddCard';
import { AddTitle } from '../AddTitle';
import { ListWrapper } from '../ListWrapper';

export const List = ({
  name,
  isAdd,
  idList,
  cards,
  isListActionsOpen,
  selectedBoard,
}) => {
  return (
    <ListWrapper>
      <HeaderList
        idList={idList}
        isListActionsOpen={isListActionsOpen}
        selectedBoard={selectedBoard}>
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
          idList={idList}
          selectedBoard={selectedBoard}
          isOpenModal={card.isOpenModal}
          description={card.description}
          listName={name}
        />
      ))}
      {isAdd ? (
        <AddTitle idList={idList} selectedBoard={selectedBoard} />
      ) : (
        <AddCard idList={idList} selectedBoard={selectedBoard} />
      )}
      {isListActionsOpen && (
        <ListActions idList={idList} selectedBoard={selectedBoard} />
      )}
    </ListWrapper>
  );
};
