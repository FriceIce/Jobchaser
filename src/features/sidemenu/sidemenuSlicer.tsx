// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  bodyStyle: {overflow: 'auto'},
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
    TOGGLE_MENU: (state) => {

      const {menuClass, timeoutId} = state; 

      if(menuClass){
        if(timeoutId){
          clearTimeout(timeoutId); 
          state.timeoutId = setTimeout(() => 'none', 350)
        } else {
          state.timeoutId = setTimeout(() => 'none', 350)
        }
        state.checked = false;
        state.menuClass = null;
        return 
      } 
      
      if(menuClass === null){
        state.styleTransition = 'translate 350ms'; 
        state.checked = true; 
        state.menuClass = 'show-menu';
        return 
      }
    },

    IS_DESKTOP: (state) => {
      state.isMobileScreen = false; 
      state.checked = false; 
      state.menuClass = null;
      state.styleTransition = 'none'; 
      console.log(state.styleTransition)
    },
    
    IS_MOBILE: (state, action) => {
      state.isMobileScreen = action.payload; 
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
  IS_DESKTOP,
  TOGGLE_MENU,
  IS_MOBILE, 
  MENU_CLASS, 
  TIMEOUT_ID, 
  CHECKED, 
  STYLE_TRANSITION, 
  MARGIN_BOTTOM 
} = sidemenuSlice.actions; 

export default sidemenuSlice.reducer; 

