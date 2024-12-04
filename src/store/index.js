import { configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from './counterSlice';
import todoSliceReducer from './todoSlice';

const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    todo: todoSliceReducer,
  },
});

export default store;
