// @ts-nocheck
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValue: '', 
  submitValue: '',
  error: '',
  jobs: [],
}

export const fetchingJobData = createAsyncThunk(
  'search/fetchingJobData', async (submitValue) => {
  const response = await fetch('https://jobsearch.api.jobtechdev.se/search?q=' + submitValue); 
  const data = await response.json(); 
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
    }, 
  },

  extraReducers: (builder) => {
    builder.addCase(fetchingJobData.fulfilled, (state, action) => {
      /* do something */
      const data = action.payload;
    
      if(data.hits.length < 1) {
        state.jobs = null; 
        return
      } else {

        const editedData = data.hits.map((job) => {
          const message = 'Information saknas';
          if(job.duration.label === null) job.duration.label = message;
          if(job.working_hours_type.label === null) job.working_hours_type.label = message;
          if(job.employment_type.label === null) job.employment_type.label = message;
          return job;
        })
  
        state.jobs = editedData; 
      }
    })
    .addCase(fetchingJobData.rejected, (state, action) => { 
      console.log('s') 
      state.error = action.payload/* do something */})
  }
})


export const {submit, input, error, tag } = searchSlice.actions;
export default searchSlice.reducer; 