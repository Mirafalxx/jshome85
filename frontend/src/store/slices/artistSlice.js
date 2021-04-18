import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';

export const fetchArtists = createAsyncThunk('artists/fetchArtists', async () => {
  const response = await axiosApi.get('/artists');
  return response.data;
});

const artistSlice = createSlice({
  name: 'artists',
  initialState: {
    artists: [],
    loadingArtists: false,
  },
  extraReducers: {
    [fetchArtists.pending]: (state) => {
      state.loadingArtists = true;
    },
    [fetchArtists.fulfilled]: (state, action) => {
      state.artists = action.payload;
      state.loadingArtists = false;
    },
    [fetchArtists.rejected]: (state, action) => {
      state.loadingArtists = false;
    },
  },
});

export default artistSlice;
