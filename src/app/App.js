import './styles.css';
import { AddList, AddTitle, List, ListWrapper } from '../layouts';
import { useSelector } from 'react-redux';

export const App = () => {
  const lists = useSelector(state => state.list.lists);
  const openNewList = useSelector(state => state.list.openNewList);
  return (
    <div className="app edit__card-app">
      {lists.map(list => (
        <List
          name={list.name}
          key={list.id}
          id={list.id}
          isAdd={list.isAdd}
          cards={list.cards}
        />
      ))}
      {openNewList ? (
        <ListWrapper>
          <AddTitle
            rows={1}
            placeholder="Enter list title.."
            buttonTitle="Add list"
          />
        </ListWrapper>
      ) : (
        <AddList />
      )}
    </div>
  );
};
