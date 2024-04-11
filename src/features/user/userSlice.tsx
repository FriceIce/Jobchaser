// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isOnline: null,
  savedJobAds: [],
}


const userSlice = createSlice({
  name: 'user', 
  initialState,
  reducers: {
    userState: (state, action) => {
      state.isOnline = action.payload; 
    }, 
    
    jobListing: (state, action) => {
      state.savedJobAds = action.payload;  
    },
    
    saveJobAd: (state, action) => {
      // The newest saved job ad will display at the top of the list.
      state.savedJobAds.unshift(action.payload); 
    },
  }
});

export const { userState, jobListing, saveJobAd } = userSlice.actions;
export default userSlice.reducer; 


