import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Card } from "../search/cardType";

export type User = {
  userId: string; 
  email: string;
  fullname?: string;
  password?: string;
  profileImg?: string; 
}

export type CreateUser = {
  userName: string | null;
  email: string | null;
  password: string | null; 
}

type State = {
  isFetchingUserData: boolean,
  isOnline: null | false | User;
  savedJobAds: Card[];
  createUser: CreateUser;
}

const initialState: State = {
  isFetchingUserData: true,
  isOnline: null,
  savedJobAds: [],
  createUser: {userName: null, email: null, password: null},
}

const userSlice = createSlice({
  name: 'user', 
  initialState,
  reducers: {
    userState: (state, action: PayloadAction<User>) => {
      state.isOnline = action.payload;
      state.isFetchingUserData = false;
    }, 
    
    jobListing: (state, action: PayloadAction<Card[]>) => {
      state.savedJobAds = action.payload;  
    },
    
    saveJobAd: (state, action: PayloadAction<Card>) => {
      // The newest saved job ad will display at the top of the list.
      state.savedJobAds.unshift(action.payload); 
    },
  }
});

export const { userState, jobListing, saveJobAd/* , resetCreateUser, saveUserInfo */ } = userSlice.actions;
export default userSlice.reducer; 


