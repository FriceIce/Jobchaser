import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Card } from "./cardType";
import { ErrorPayload } from "vite/types/hmrPayload.js";

type State = {
  inputValue: string; 
  submitValue: string;
  error: string;
  jobs: Card[];
  isLoading: boolean;
  isActive: boolean; 
}

const initialState: State = {
  inputValue: '', 
  submitValue: '',
  error: '',
  jobs: [],
  isLoading: false,
  isActive: false,
} 

export const fetchingJobData = createAsyncThunk(
  'search/fetchingJobData', 
  async (submitValue: string) => {
    const response = await fetch('https://jobsearch.api.jobtechdev.se/search?q=' + submitValue); 
    const resJson = await response.json(); 
    const data: Promise<Card[]> = resJson.hits; 
  return data;
})

export const searchSlice = createSlice({
  name: 'search', 
  initialState,
  reducers: {
    // Here is were all the logic happens. 
    submit: (state) => {
      state.submitValue = state.inputValue;
    },

    input: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },

    error: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },

    tag: (state, action: PayloadAction<string>)  => {
      const tagContent = action.payload;
      state.inputValue = tagContent; 
      state.submitValue = tagContent; 
    }, 
  },

  extraReducers: (builder) => {
    builder.addCase(fetchingJobData.pending, (state) => {
      state.isLoading = true; 
      state.isActive = false;
    }).addCase(fetchingJobData.fulfilled, (state, action: PayloadAction<Card[], string>) => {
      /* do something */
      const data = action.payload;
      // console.log(data)
      const editedData: Card[] = data.map((job: Card) => {
        const message = 'Information saknas';
        if(job.duration.label === null) job.duration.label = message;
        if(job.working_hours_type.label === null) job.working_hours_type.label = message;
        if(job.employment_type.label === null) job.employment_type.label = message;
        return job;
      })

      state.jobs = editedData; 
      state.isActive = true; 
      state.isLoading = false; 
    })
    .addCase(fetchingJobData.rejected, (state, action: PayloadAction<unknown>) => {  
      /* do something */
      const errorAction = action.payload as ErrorPayload;  
      state.error = errorAction.err.message;
      state.isLoading = false; 
    })
  }
})


export const {submit, input, error, tag } = searchSlice.actions;
export default searchSlice.reducer; 