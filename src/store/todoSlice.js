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
    toggleTaskIsDone: (state, action)=>{
      const {payload: {id}} = action;
      const task = state.tasks.find((task)=>task.id === id);
      if(task){
        task.isDone = !task.isDone
      }
    }
  },
});

export const {addNewTask, toggleTaskIsDone} = todoSlice.actions;

export default todoSlice.reducer;
