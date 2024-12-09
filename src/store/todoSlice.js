import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const loadTasks = createAsyncThunk('todo/loadTasks', async () => {
  const tasks = JSON.parse(localStorage.getItem('todo'));
  return tasks;
});

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    tasks: [],
    error: null,
    isPending: false,
  },
  reducers: {
    addNewTask: (state, action) => {
      const {
        payload: { text },
      } = action;
      const newTask = { id: uuidv4(), content: text, isDone: false };
      state.tasks.push(newTask);
    },
    toggleTaskIsDone: (state, action) => {
      const {
        payload: { id },
      } = action;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    deleteTask: (state, action) => {
      const {
        payload: { id },
      } = action;
      state.tasks = state.tasks.filter((task) => id !== task.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadTasks.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(loadTasks.fulfilled, (state, action) => {
      state.isPending = false;
      state.tasks = action.payload;
    });
    builder.addCase(loadTasks.rejected, (state, action) => {
      state.isPending = false;
      state.error = action.error.message || 'ERROR!!!';
    });
  },
});

export const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('todo', JSON.stringify(tasks));
};

export const { addNewTask, toggleTaskIsDone, deleteTask } = todoSlice.actions;

export default todoSlice.reducer;
