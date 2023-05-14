import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
    name: 'home',
    initialState:{
        url:{},
        params:{}
    },
    reducers: {
     getApiConfiguration: (state, action) => {
        state.url = action.payload;
    },
    getGenreConfiguration: (state, action) => { 
        state.params = action.payload;
    }
  }})
  
  // Action creators are generated for each case reducer function
  export const { getApiConfiguration, getGenreConfiguration } = homeSlice.actions
export default homeSlice.reducer;
  