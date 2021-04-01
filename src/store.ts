 import { configureStore } from '@reduxjs/toolkit';
 import submitCredentials from './slices/signupSlice';
 
 // we are adding composeWithDevTools here to get easy access to the Redux dev tools
 const store = configureStore({
   reducer: {
    signup: submitCredentials,
   }
 });
 
 export default store;