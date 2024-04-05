// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValue: '', 
  submitValue: '',
  error: '',
}

export const searchSlice = createSlice({
  name: 'search', 
  initialState,
  reducers: {
    // Here is were all the logic happens. 
    submit: (state, action) => {
      state.submitValue = action.payload;
    },

    input: (state, action) => {
      state.inputValue = action.payload;
    },

    error: (state, action) => {
      state.error = action.payload;
    },

    tag: (state, action)  => {
      const tagContent = action.payload;
      state.inputValue = tagContent; 
      state.submitValue = tagContent; 
    } 
  }
})

export const {submit, input, error, tag } = searchSlice.actions;

export default searchSlice.reducer; 