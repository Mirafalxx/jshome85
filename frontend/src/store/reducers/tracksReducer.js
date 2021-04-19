import { FETCH_TRACKS_FAILURE, FETCH_TRACKS_REQUEST, FETCH_TRACKS_SUCCESS } from '../actions/tracksAction';

const initialState = {
  tracks: [],
  loadingTracks: false,
};

const tracksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRACKS_REQUEST:
      return { ...state, loadingTracks: true };
    case FETCH_TRACKS_SUCCESS:
      return { ...state, loadingTracks: false, tracks: action.tracks };
    case FETCH_TRACKS_FAILURE:
      return { ...state, loadingTracks: false };
    default:
      return state;
  }
};

export default tracksReducer;
