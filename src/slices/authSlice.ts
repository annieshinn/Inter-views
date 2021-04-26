import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';

export const createActionLogin = createAction<Array<string>>('authenticate/login');
export const createActionChangeUsername = createAction<string>('authenticate/changeUsername');
export const createActionChangePassword = createAction<string>('authenticate/changePassword');
interface credentialState {
  username: string,
  password: string,
  // status: logged in,
}

const initialState = {
  username: '',
  password:''
} as credentialState;

export const authSlice = createSlice({
  name: 'authenticate',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<null>) => {
      // console.log(action.payload)
      // state.username = action.payload[0];
      // state.password = action.payload[1];
    },
    changeUsername: (state, action: PayloadAction<string>) => {
      console.log('USER', action.payload)
      state.username = action.payload;
    },
    changePassword: (state, action: PayloadAction<string>) => {
      console.log('PASS', action.payload)
      state.password = action.payload;
    },
  },
})

export const { login } = authSlice.actions;
export default authSlice.reducer;
