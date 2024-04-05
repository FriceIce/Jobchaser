// @ts-nocheck

import { configureStore } from "@reduxjs/toolkit";
import searchReducer from '../features/search/searchSlice'
import sidemenuReducer from '../features/sidemenu/sidemenuSlicer'

export const store = configureStore({
  reducer: {
    search: searchReducer,
    sidemenu: sidemenuReducer,
  },
});