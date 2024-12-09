import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '../api';

export const loadUsers = createAsyncThunk(
  'users/loadUsers',
  async (args, thunkAPI) => {
    try {
      const result = await getUsers();
      console.log(result);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadUsers.pending, (state)=>{
      state.isLoading = true;
    });
    builder.addCase(loadUsers.fulfilled, (state, action)=>{
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(loadUsers.rejected, (state, action)=>{
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default usersSlice.reducer;
