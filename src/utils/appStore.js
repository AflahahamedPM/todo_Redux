import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import modalReducer from './modalSlice'
export const appStore = configureStore({
  reducer: {
    todos: todoReducer,
    modal:modalReducer
  },
});

