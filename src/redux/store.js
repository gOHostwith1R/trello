import { combineReducers, configureStore } from '@reduxjs/toolkit';
import listSlice from './slices/listSlice';

const rootReducer = combineReducers({
  list: listSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
