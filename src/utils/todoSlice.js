import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: JSON.parse(localStorage.getItem("todos")) || [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        title: action.payload.title,
        status: action.payload.currentStatus,
      });
    },
    editTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);

      if (todo) {
        todo.title = action.payload.title || todo.title;
        todo.status = action.payload.currentStatus || todo.status;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    setTodos: (state, action) => {
      return action.payload;
    },
  },
});

export const { addTodo, editTodo, deleteTodo, setTodos } = todoSlice.actions;
export default todoSlice.reducer;
