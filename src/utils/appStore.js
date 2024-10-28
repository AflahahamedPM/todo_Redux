import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

export const appStore = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

