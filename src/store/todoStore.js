import todoSlice from './todoSlice';
import {configureStore} from '@reduxjs/toolkit';

const todoStore = configureStore({
  reducer: {
    todos: todoSlice,
  }
});

export default todoStore;


