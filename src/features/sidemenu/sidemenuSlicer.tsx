// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isMobileScreen: false, 
  menuClass: null,
  checked: false,
  timeoutId: null, 
  styleTransition: 'none',
  marginBottom: 'none'
}

export const sidemenuSlice = createSlice({
  name: 'sidemenu',
  initialState,
  reducers: {
    IS_MOBILE: (state, action) => {
      console.log(action)
      state.isMobileScreen = action.payload; 
    },

    MENU_CLASS: (state, action) => {
      state.menuClass = action.payload; 
    },

    TIMEOUT_ID: (state, action) => {
      state.timeoutId = action.payload; 
    },

    CHECKED: (state, action) => {
      state.checked = action.payload; 
    },

    STYLE_TRANSITION: (state, action) => {
      state.styleTransition = action.payload; 
    },

    MARGIN_BOTTOM: (state, action) => {
      state.marginBottom = action.payload; 
    },
  }
}); 

export const { 
  IS_MOBILE, 
  MENU_CLASS, 
  TIMEOUT_ID, 
  CHECKED, 
  STYLE_TRANSITION, 
  MARGIN_BOTTOM 
} = sidemenuSlice.actions; 

export default sidemenuSlice.reducer; 

