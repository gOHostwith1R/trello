import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boards: [
    {
      name: 'First board',
      id: 0,
      lists: [
        {
          id: 0,
          name: 'To Do',
          isAdd: false,
          cards: [
            { id: 0, name: 'Card 1', isEdit: false },
            { id: 1, name: 'Card 2', isEdit: false },
            {
              id: 2,
              name: 'Card 3 and Etc bla bla vla bla bla vla bla vldddddddddddddddddddddddddddddddddddddddddd',
              isEdit: false,
            },
          ],
        },
        {
          id: 1,
          name: 'To Do 1',
          isAdd: false,
          cards: [],
        },
      ],
    },
    {
      id: 1,
      name: 'Second board',
      lists: [
        {
          id: 0,
          name: 'To Do',
          isAdd: false,
          cards: [{ id: 0, name: 'Card 1', isEdit: false }],
        },
      ],
    },
  ],
  isListActionsOpen: false,
  openNewList: false,
  creteNewBoard: false,
  selectedBoard: 0,
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setOpen(state, action) {
      const { idList, selectedBoard, name } = action.payload;
      if (name === 'card') {
        state.boards[selectedBoard].lists[idList].isAdd = true;
      } else {
        state.openNewList = true;
      }
    },
    setCLose(state, action) {
      if (action.payload !== undefined) {
        state.boards[action.payload.selectedBoard].lists[
          action.payload.idList
        ].isAdd = false;
      } else {
        state.openNewList = false;
      }
    },
    createCard(state, action) {
      const { idList, selectedBoard, name } = action.payload;
      state.boards[selectedBoard].lists[idList].cards.push({
        name: name,
        isEdit: false,
        id: state.boards[selectedBoard].lists[idList].cards.length,
      });
    },
    createList(state, action) {
      const { selectedBoard, name } = action.payload;
      state.boards[selectedBoard].lists.push({
        name: name,
        id: state.boards[selectedBoard].lists.length,
        cards: [],
        isAdd: false,
        isListActionsOpen: false,
      });
    },
    setEditCard(state, action) {
      const { idCard, idList, selectedBoard } = action.payload;
      state.boards[selectedBoard].lists[idList].cards[idCard].isEdit = true;
    },
    closeEditCard(state, action) {
      const { idCard, idList, selectedBoard } = action.payload;
      state.boards[selectedBoard].lists[idList].cards[idCard].isEdit = false;
    },
    editCard(state, action) {
      const { idCard, idList, text, selectedBoard } = action.payload;
      if (text === '') {
        return;
      }
      state.boards[selectedBoard].lists[idList].cards[idCard].name = text;
    },
    deleteCard(state, action) {
      const { idCard, idList, selectedBoard } = action.payload;
      state.boards[selectedBoard].lists[idList].cards.splice(idCard, 1);
      state.boards[selectedBoard].lists[idList].cards.forEach(card => {
        if (idCard <= card.id) {
          card.id--;
        }
      });
    },
    deleteList(state, action) {
      const { idList, selectedBoard } = action.payload;
      state.boards[selectedBoard].lists.splice(idList, 1);
      state.boards[selectedBoard].lists.forEach(list => {
        if (idList <= list.id) {
          list.id--;
        }
      });
    },
    openListActions(state, action) {
      const { idList, selectedBoard } = action.payload;
      state.boards[selectedBoard].lists[idList].isListActionsOpen = true;
    },
    closeListActions(state, action) {
      const { idList, selectedBoard } = action.payload;
      state.boards[selectedBoard].lists[idList].isListActionsOpen = false;
    },
    openCreateBoard(state) {
      state.creteNewBoard = true;
    },
    closeCreateBoard(state) {
      state.creteNewBoard = false;
    },
    createBoard(state, action) {
      state.boards.push({
        name: action.payload,
        id: state.boards.length,
      });
    },
  },
});

export default listSlice.reducer;
export const {
  setOpen,
  setCLose,
  createCard,
  createList,
  setEditCard,
  editCard,
  closeEditCard,
  deleteCard,
  deleteList,
  openListActions,
  closeListActions,
  closeCreateBoard,
  openCreateBoard,
  createBoard,
} = listSlice.actions;
