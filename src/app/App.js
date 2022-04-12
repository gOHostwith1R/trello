import './styles.css';
import { AddList, AddTitle, List, ListWrapper, Navigation } from '../layouts';
import { useSelector } from 'react-redux';

export const App = () => {
  const selectedBoard = useSelector(state => state.list.selectedBoard);
  const boards = useSelector(state => state.list.boards);
  const openNewList = useSelector(state => state.list.openNewList);
  return (
    <div className="app">
      <Navigation boards={boards} />
      <div className="main__content">
        {boards[selectedBoard].lists.map(list => (
          <List
            name={list.name}
            key={list.id}
            idList={list.id}
            isAdd={list.isAdd}
            cards={list.cards}
            isListActionsOpen={list.isListActionsOpen}
            selectedBoard={selectedBoard}
          />
        ))}
        {openNewList ? (
          <ListWrapper>
            <AddTitle
              rows={1}
              placeholder="Enter list title.."
              buttonTitle="Add list"
              selectedBoard={selectedBoard}
            />
          </ListWrapper>
        ) : (
          <AddList />
        )}
      </div>
    </div>
  );
};
