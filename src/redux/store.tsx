// @ts-nocheck
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from '../features/search/searchSlice';
import sidemenuReducer from '../features/sidemenu/sidemenuSlicer';
import userReducer from '../features/user/userSlice';
import backgroundReducer from '../features/background/backgroundSlice'; 

export const store = configureStore({
  reducer: {
    search: searchReducer,
    sidemenu: sidemenuReducer,
    user: userReducer,
    background: backgroundReducer,
  },
  
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
});