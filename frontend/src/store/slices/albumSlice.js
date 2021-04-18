import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';

export const fetchAlbums = createAsyncThunk('albums/fetchAlbums', async (artistID) => {
  const response = await axiosApi.get(`/albums/?artist=${artistID}`);
  console.log(response.data);
  return response.data;
});

const albumSlice = createSlice({
  name: 'albums',
  initialState: {
    albums: [],
    loadingAlbums: false,
  },
  extraReducers: {
    [fetchAlbums.pending]: (state) => {
      state.loadingAlbums = true;
    },
    [fetchAlbums.fulfilled]: (state, action) => {
      state.albums = action.payload;
      state.loadingAlbums = false;
    },
    [fetchAlbums.rejected]: (state, action) => {
      state.loadingAlbums = false;
    },
  },
});

export default albumSlice;
