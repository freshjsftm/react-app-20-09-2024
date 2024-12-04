import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    tasks: [],
  },
  reducers: {
    addNewTask: (state, action) => {
      const {payload: { text }} = action;
      const newTask = { id: uuidv4(), content: text, isDone: false };
      state.tasks.push(newTask);
    },
  },
});

export const {addNewTask} = todoSlice.actions;

export default todoSlice.reducer;
