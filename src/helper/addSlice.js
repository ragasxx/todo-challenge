import { createSlice } from "@reduxjs/toolkit";

const addSlice = createSlice({
  name: "add",
  initialState: { todo: [] },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        name: action.payload.name,
        description: action.payload.description,
      };
      state.todo.push(todo);
    },
    removeTodo: (state, action) => {
      const indexToRemove = action.payload;
      if (indexToRemove >= 0 && indexToRemove < state.todo.length) {
        state.todo.splice(indexToRemove, 1);
      }
    },
    editTodo: (state, action) => {
      
      
         
    },
  },
});

export default addSlice.reducer;

export const { addTodo, removeTodo } = addSlice.actions;
