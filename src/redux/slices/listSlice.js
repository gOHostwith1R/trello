import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
  isListActionsOpen: false,
  openNewList: false,
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setOpen(state, action) {
      if (action.payload.name === 'card') {
        state.lists[action.payload.id].isAdd = true;
      } else {
        state.openNewList = true;
      }
    },
    setCLose(state, action) {
      if (action.payload !== undefined) {
        state.lists[action.payload].isAdd = false;
      } else {
        state.openNewList = false;
      }
    },
    createCard(state, action) {
      state.lists[action.payload.id].cards.push({
        name: action.payload.name,
        isEdit: false,
        id: state.lists[action.payload.id].cards.length,
      });
    },
    createList(state, action) {
      state.lists.push({
        name: action.payload,
        id: state.lists.length,
        cards: [],
        isAdd: false,
        isListActionsOpen: false,
      });
    },
    setEditCard(state, action) {
      const { idCard, idList } = action.payload;
      state.lists[idList].cards[idCard].isEdit = true;
    },
    closeEditCard(state, action) {
      const { idCard, idList } = action.payload;
      state.lists[idList].cards[idCard].isEdit = false;
    },
    editCard(state, action) {
      const { idCard, idList, text } = action.payload;
      if (text === '') {
        return;
      }
      state.lists[idList].cards[idCard].name = text;
    },
    deleteCard(state, action) {
      const { idCard, idList } = action.payload;
      state.lists[idList].cards.splice(idCard, 1);
    },
    deleteList(state, action) {
      const { payload } = action;
      state.lists.splice(payload, 1);
    },
    openListActions(state, action) {
      const { payload } = action;
      state.lists[payload].isListActionsOpen = true;
    },
    closeListActions(state, action) {
      const { payload } = action;
      state.lists[payload].isListActionsOpen = false;
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
} = listSlice.actions;
