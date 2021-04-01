import { createSlice } from '@reduxjs/toolkit';

interface credentialState {
  username: string,
  email: string,
  password: string
}

const initialState = {
  username: '',
  email: '',
  password:''
} as credentialState;

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    submitCredentials: (state) => {
      state.email,
      state.password,
      state.username
    },
  },
})

export const { submitCredentials } = signupSlice.actions;
export default signupSlice.reducer;