import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';

export const fetchTrack = createAsyncThunk('tracks/fetchTrack', async (artistID) => {
  const response = await axiosApi.get(`/tracks/?album=${artistID}`);
  console.log(response.data);
  return response.data;
});

const trackSlice = createSlice({
  name: 'tracks',
  initialState: {
    tracks: [],
    loadTracks: false,
  },
  extraReducers: {
    [fetchTrack.pending]: (state) => {
      state.loadTracks = true;
    },
    [fetchTrack.fulfilled]: (state, action) => {
      state.tracks = action.payload;
      state.loadTracks = false;
    },
    [fetchTrack.rejected]: (state, action) => {
      state.loadTracks = false;
    },
  },
});

export default trackSlice;
