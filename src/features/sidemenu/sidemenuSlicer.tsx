// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  IsMobileScreen: false, 
  menuClass: null,
  checked: false,
  timeoutId: null, 
  styleTransition: 'none',
  marginBottom: 'none'
}

export const sidemenuSlice = createSlice({
  name: 'sideMenu',
  initialState,
  reducers: {
    IS_MOBILE: (state) => {

    },
  }
}); 

export default sidemenuSlice.reducer; 

