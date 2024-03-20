import { createSlice, current } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name : 'todo',
  initialState: {
    lists: [],
  },
  reducers: {
    addTodo(state, action) {
      const newTodo = {
        id: new Date().getTime().toString(),
        text: action.payload
      }
      console.log(current.state);
      state.lists.push(newTodo);
    },

    removeTodo(state, action) {
      const index = state.lists.findIndex(todo => todo.id === action.payload);
      state.lists.splice(index, 1);
    },

    clearAll(state, action) {
      return [] 
    }
  }
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, clearAll } = todoSlice.actions;