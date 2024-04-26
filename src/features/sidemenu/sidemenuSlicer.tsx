import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type State = {
  isMobileScreen: boolean;
  menuClass: null | string;
  checked: boolean;
  timeoutId: ReturnType<typeof setTimeout>;
  styleTransition: string;
}

const initialState: State = {
  isMobileScreen: false, 
  menuClass: null,
  checked: false,
  timeoutId: setTimeout(() => {}, 0), 
  styleTransition: 'none',
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
    },
    
    IS_MOBILE: (state, action: PayloadAction<boolean>) => {
      state.isMobileScreen = action.payload; 
    },

    STYLE_TRANSITION: (state, action: PayloadAction<string>) => {
      state.styleTransition = action.payload; 
    },
  }
}); 

export const { 
  IS_DESKTOP,
  TOGGLE_MENU,
  IS_MOBILE,  
  STYLE_TRANSITION,
} = sidemenuSlice.actions; 

export default sidemenuSlice.reducer; 

