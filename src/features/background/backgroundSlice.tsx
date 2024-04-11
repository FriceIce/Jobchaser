// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isDarkTheme: false,
  textColorHeader: '',
  color: '', //isDarkTheme ?  '#ffff' : ''
  background: '' //isDarkTheme ? 'linear-gradient(147deg, #4d4855 0%, #000000 74%)' : 'whitesmoke'
}

const backgroundSlice = createSlice({
  name: 'background',
  initialState, 
  reducers: {
    setIsDarkTheme: (state) => {

      if(state.isDarkTheme === false){
        state.isDarkTheme = true; 
        return 
      } 
      if(state.isDarkTheme === true){
        state.isDarkTheme = false;
        console.log(state.isDarkTheme)
        return
      }  
    },

    setTextColorHeader: (state, action) => {
      state.textColorHeader = action.payload; 
    },

    setColor: (state) => {
      state.color = !state.isDarkTheme ? '#ffff' : '';
    },

    setBackground: (state) => {
      state.background = state.isDarkTheme ? 'linear-gradient(147deg, #4d4855 0%, #000000 74%)' : 'whitesmoke';
    }
  }
});

export const { setTextColorHeader, setColor, setBackground, setIsDarkTheme } = backgroundSlice.actions;

export default backgroundSlice.reducer;