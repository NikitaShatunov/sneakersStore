import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const fetchData = createAsyncThunk('data/fetchData', async (params) => {
  const { brand, sortType, isAsc } = params
  const { data } = await axios.get(`https://636106e067d3b7a0a6bbab86.mockapi.io/sneakers?${
    brand !=='Всі' ? `brand=${brand}` : ""
  }&sortBy=${sortType}&order=${isAsc ? "asc" : "desc"}`);
  return data;
});

const sneakersFetchSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    setItems(state, action) {
      state.data = action.payload;
  }
},
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.loading = true;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [fetchData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const { setItems } = sneakersFetchSlice.actions;
export default sneakersFetchSlice.reducer;