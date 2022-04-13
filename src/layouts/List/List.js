import React from 'react';
import './styles.css';
import { Card, ListActions, Textarea } from '../../components';
import { HeaderList } from '../../components/HeaderList/HeaderList';
import { AddCard } from '../AddCard';
import { AddTitle } from '../AddTitle';
import { ListWrapper } from '../ListWrapper';
import { Draggable, Droppable } from 'react-beautiful-dnd';

export const List = ({
  name,
  isAdd,
  idList,
  cards,
  isListActionsOpen,
  selectedBoard,
  index,
}) => {
  return (
    <ListWrapper>
      <Draggable draggableId={String(idList)} index={index}>
        {provided => (
          <div
            className="list__container"
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}>
            <Droppable droppableId={String(idList)}>
              {provided => (
                <div
                  className="list__container"
                  {...provided.droppableProps}
                  ref={provided.innerRef}>
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
                      key={card.id}
                      isEdit={card.isEdit}
                      idCard={card.id}
                      idList={idList}
                      selectedBoard={selectedBoard}
                      isOpenModal={card.isOpenModal}
                      description={card.description}
                      listName={name}
                      index={index}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        )}
      </Draggable>
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
