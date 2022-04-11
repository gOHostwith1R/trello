import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lists: [
    {
      id: 0,
      name: 'To Do',
      isAdd: false,
    },
    {
      id: 1,
      name: 'To Do 1',
      isAdd: false,
    },
  ],
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
  },
});

export default listSlice.reducer;
export const { setOpen, setCLose } = listSlice.actions;
