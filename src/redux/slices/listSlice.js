import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boards: [
    {
      name: 'First board',
      id: 0,
      isEditBoard: false,
      lists: [
        {
          id: `list-${0}`,
          name: 'To Do',
          isAdd: false,
          cards: [
            {
              id: `list-${0}-card-${0}`,
              name: 'Card 1',
              isEdit: false,
              description: '',
              isOpenModal: false,
            },
            {
              id: `list-${0}-card-${1}`,
              name: 'Card 2',
              isEdit: false,
              description: '',
              isOpenModal: false,
            },
            {
              id: `list-${0}-card-${2}`,
              name: 'Card 3 and Etc bla bla vla bla bla vla bla vldddddddddddddddddddddddddddddddddddddddddd',
              isEdit: false,
              description: 'bla',
              isOpenModal: false,
            },
          ],
        },
        {
          id: `list-${1}`,
          name: 'To Do 1',
          isAdd: false,
          cards: [],
        },
      ],
    },
    {
      id: 1,
      name: 'Second board',
      isEditBoard: false,
      lists: [],
    },
  ],
  isListActionsOpen: false,
  openNewList: false,
  creteNewBoard: false,
  selectedBoard: 0,
  userName: 'User',
  userActivity: [],
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setOpen(state, action) {
      const { idList, selectedBoard, name } = action.payload;
      if (name === 'card') {
        const numIdList = idList.slice(-1);
        state.boards[selectedBoard].lists[numIdList].isAdd = true;
      } else {
        state.openNewList = true;
      }
    },
    setCLose(state, action) {
      if (action.payload !== undefined) {
        const { idList, selectedBoard } = action.payload;
        const numIdList = idList.slice(-1);
        state.boards[selectedBoard].lists[numIdList].isAdd = false;
      } else {
        state.openNewList = false;
      }
    },
    createCard(state, action) {
      const { idList, selectedBoard, name } = action.payload;
      const numIdList = idList.slice(-1);
      state.boards[selectedBoard].lists[numIdList].cards.push({
        name: name,
        isEdit: false,
        description: '',
        isOpenModal: false,
        id: `list-${numIdList}-card-${state.boards[selectedBoard].lists[numIdList].cards.length}`,
      });
    },
    createList(state, action) {
      const { selectedBoard, name } = action.payload;
      state.boards[selectedBoard].lists.push({
        name: name,
        id: `list-${state.boards[selectedBoard].lists.length}`,
        cards: [],
        isAdd: false,
        isListActionsOpen: false,
      });
    },
    setEditCard(state, action) {
      const { idCard, idList, selectedBoard } = action.payload;
      const numIdCard = idCard.slice(-1);
      const numIdList = idList.slice(-1);
      state.boards[selectedBoard].lists[numIdList].cards[
        numIdCard
      ].isEdit = true;
    },
    closeEditCard(state, action) {
      const { idCard, idList, selectedBoard } = action.payload;
      const numIdCard = idCard.slice(-1);
      const numIdList = idList.slice(-1);
      state.boards[selectedBoard].lists[numIdList].cards[
        numIdCard
      ].isEdit = false;
    },
    editCard(state, action) {
      const { idCard, idList, text, selectedBoard } = action.payload;
      const numIdCard = idCard.slice(-1);
      const numIdList = idList.slice(-1);
      if (text === '') {
        return;
      }
      state.boards[selectedBoard].lists[numIdList].cards[numIdCard].name = text;
    },
    deleteCard(state, action) {
      const { idCard, idList, selectedBoard } = action.payload;
      const numIdList = idList.slice(-1);
      const numIdCard = idCard.slice(-1);
      state.boards[selectedBoard].lists[numIdList].cards.splice(numIdCard, 1);
      state.boards[selectedBoard].lists[numIdList].cards.forEach(card => {
        let numIdCardInner = card.id.slice(-1);
        if (numIdCard <= numIdCardInner && numIdCardInner !== 0) {
          numIdCardInner--;
          card.id = `list-${numIdList}-card-${numIdCardInner}`;
        }
      });
    },
    deleteList(state, action) {
      const { idList, selectedBoard } = action.payload;
      const numIdList = idList.slice(-1);
      state.boards[selectedBoard].lists.splice(numIdList, 1);
      state.boards[selectedBoard].lists.forEach(list => {
        let numIdListInner = list.id.slice(-1);
        if (numIdList <= numIdListInner && numIdListInner !== 0) {
          numIdListInner--;
          list.id = `list-${numIdListInner}`;
        }
      });
    },
    openListActions(state, action) {
      const { idList, selectedBoard } = action.payload;
      const numIdList = idList.slice(-1);
      state.boards[selectedBoard].lists[numIdList].isListActionsOpen = true;
    },
    closeListActions(state, action) {
      const { idList, selectedBoard } = action.payload;
      const numIdList = idList.slice(-1);
      state.boards[selectedBoard].lists[numIdList].isListActionsOpen = false;
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
        isEditBoard: false,
        lists: [],
      });
    },
    openEditBoard(state, action) {
      state.boards[action.payload].isEditBoard = true;
    },
    closeEditBoard(state, action) {
      state.boards[action.payload].isEditBoard = false;
    },
    editBoard(state, action) {
      const { idBoard, text } = action.payload;
      state.boards[idBoard].name = text;
    },
    deleteBoard(state, action) {
      const { payload } = action;
      state.boards.splice(payload, 1);
      state.boards.forEach(board => {
        if (payload >= board.id && board.id !== 0) {
          board.id--;
        }
      });
    },
    changeBoard(state, action) {
      const { payload } = action;
      state.selectedBoard = payload;
    },
    openModalDescriptionCard(state, action) {
      const { idCard, idList, selectedBoard } = action.payload;
      const numIdCard = idCard.slice(-1);
      const numIdList = idList.slice(-1);
      state.boards[selectedBoard].lists[numIdList].cards[
        numIdCard
      ].isOpenModal = true;
    },
    closeModalDescriptionCard(state, action) {
      const { idCard, idList, selectedBoard } = action.payload;
      const numIdCard = idCard.slice(-1);
      const numIdList = idList.slice(-1);
      state.boards[selectedBoard].lists[numIdList].cards[
        numIdCard
      ].isOpenModal = false;
    },
    saveDescriptionNameCard(state, action) {
      const { idCard, idList, selectedBoard, textDescription, textName } =
        action.payload;
      const numIdCard = idCard.slice(-1);
      const numIdList = idList.slice(-1);
      if (textName === '') {
      } else {
        state.boards[selectedBoard].lists[numIdList].cards[numIdCard].name =
          textName;
      }
      state.boards[selectedBoard].lists[numIdList].cards[
        numIdCard
      ].description = textDescription;
    },
    sort(state, action) {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        selectedBoard,
        type,
      } = action.payload;
      if (type === 'list') {
        const endListId =
          state.boards[selectedBoard].lists[droppableIndexEnd].id;
        state.boards[selectedBoard].lists[droppableIndexEnd].id =
          state.boards[selectedBoard].lists[droppableIndexStart].id;
        const listStart = state.boards[selectedBoard].lists.splice(
          droppableIndexStart,
          1,
        );
        listStart[0].id = endListId;
        listStart[0].cards.forEach(elem => {
          const id = elem.id.slice(-1);
          elem.id = `list-${droppableIndexEnd}-card-${id}`;
        });
        state.boards[selectedBoard].lists.splice(
          droppableIndexEnd,
          0,
          ...listStart,
        );
        return;
      }
      if (droppableIdStart === droppableIdEnd) {
        const list = state.boards[selectedBoard].lists.find(
          list => droppableIdStart === list.id,
        );
        const cardStart = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...cardStart);
        return;
      }
      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state.boards[selectedBoard].lists.find(
          list => droppableIdStart === list.id,
        );
        const card = listStart.cards.splice(droppableIndexStart, 1);
        const remainingCard = listStart.cards.splice(droppableIndexStart);
        remainingCard.forEach(card => {
          const numCardId = card.id.slice(-1);
          card.id = `${droppableIdStart}-card-${numCardId - 1}`;
        });
        const listEnd = state.boards[selectedBoard].lists.find(
          list => droppableIdEnd === list.id,
        );
        const numIdListEnd = droppableIdEnd.slice(-1);
        card[0].id = `${droppableIdEnd}-card-${state.boards[selectedBoard].lists[numIdListEnd].cards.length}`;
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
        listStart.cards.splice(droppableIndexStart, 0, ...remainingCard);
      }
    },
    changeUserActivity(state, action) {
      state.userActivity.push(`${state.userName} ${action.payload}`);
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
  openEditBoard,
  editBoard,
  closeEditBoard,
  deleteBoard,
  changeBoard,
  openModalDescriptionCard,
  closeModalDescriptionCard,
  saveDescriptionNameCard,
  changeUserActivity,
  sort,
} = listSlice.actions;
