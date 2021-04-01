 import { configureStore } from '@reduxjs/toolkit';
 import submitCredentials from './slices/signupSlice';
 import dashboardReducer from './slices/dashboardSlice';

 const store = configureStore({
   reducer: {
    signup: submitCredentials,
    modalIsOpen: dashboardReducer,
   }
 });
 
 export type RootState = ReturnType<typeof store.getState>;
 export type AppDispatch = typeof store.dispatch;
 export default store;