import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type State = {
  bodyStyle: {overflow: string};
  isMobileScreen: boolean;
  menuClass: null | string;
  checked: boolean;
  timeoutId: ReturnType<typeof setTimeout>;
  styleTransition: string;
  marginBottom: string;
}

const initialState: State = {
  bodyStyle: {overflow: 'auto'},
  isMobileScreen: false, 
  menuClass: null,
  checked: false,
  timeoutId: setTimeout(() => {}, 0), 
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
        state.bodyStyle.overflow = 'auto'; 
        state.checked = false;
        state.menuClass = null;
        return 
      } 
      
      if(menuClass === null){
        state.bodyStyle.overflow = 'hidden';
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
    
    IS_MOBILE: (state, action: PayloadAction<boolean>) => {
      state.isMobileScreen = action.payload; 
    },

    STYLE_TRANSITION: (state, action: PayloadAction<string>) => {
      state.styleTransition = action.payload; 
    },

    MARGIN_BOTTOM: (state, action: PayloadAction<string>) => {
      state.marginBottom = action.payload; 
    },
  }
}); 

export const { 
  IS_DESKTOP,
  TOGGLE_MENU,
  IS_MOBILE,  
  STYLE_TRANSITION, 
  MARGIN_BOTTOM 
} = sidemenuSlice.actions; 

export default sidemenuSlice.reducer; 

