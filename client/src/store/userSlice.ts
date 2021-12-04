import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  token: string;
  message: string;
  user: {
    email: string;
    name: string;
  };
}
interface UserState {
  data: User;
}

const initialState: UserState = {
  data: {} as User,
};

export const registerUser = createAsyncThunk(
  'registerUser',
  async (dispatch, registerForm) => {
    const response = await axios.post('/users/register', registerForm);
    return response.data;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      registerUser.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.data = action.payload;
      }
    );
  },
});
export default userSlice.reducer;
