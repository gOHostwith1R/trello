import './styles.css';
import { AddList, AddTitle, List, ListWrapper, Navigation } from '../layouts';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from '../redux/slices/listSlice';

export const App = () => {
  const dispatch = useDispatch();
  const selectedBoard = useSelector(state => state.list.selectedBoard);
  const boards = useSelector(state => state.list.boards);
  const openNewList = useSelector(state => state.list.openNewList);
  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    dispatch(
      sort({
        droppableIdStart: source.droppableId,
        droppableIdEnd: destination.droppableId,
        droppableIndexStart: source.index,
        droppableIndexEnd: destination.index,
        draggableId,
        selectedBoard,
      }),
    );
  };
  return (
    <div className="app">
      <DragDropContext onDragEnd={onDragEnd}>
        <Navigation boards={boards} />
        <div className="main__content">
          {boards.length !== 0 &&
            boards[selectedBoard].lists.map(list => (
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
                placeholder="Enter list title.."
                buttonTitle="Add list"
                selectedBoard={selectedBoard}
              />
            </ListWrapper>
          ) : (
            <AddList />
          )}
        </div>
      </DragDropContext>
    </div>
  );
};
