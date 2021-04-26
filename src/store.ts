 import { configureStore } from '@reduxjs/toolkit';
 import authReducer from './slices/authSlice';
 import dashboardReducer from './slices/dashboardSlice';

 const store = configureStore({
   reducer: {
    authenticate: authReducer,
    modalIsOpen: dashboardReducer,
   }
 });
 
 export type RootState = ReturnType<typeof store.getState>;
 export type AppDispatch = typeof store.dispatch;
 export default store;
