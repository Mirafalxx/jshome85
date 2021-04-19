import { FETCH_ARTISTS_FAILURE, FETCH_ARTISTS_REQUEST, FETCH_ARTISTS_SUCCESS } from '../actions/artistsActions';

const initialState = {
  artists: [],
  loadingArtists: false,
};

const artistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTISTS_REQUEST:
      return { ...state, loadingArtists: true };
    case FETCH_ARTISTS_SUCCESS:
      return { ...state, loadingArtists: false, artists: action.artists };
    case FETCH_ARTISTS_FAILURE:
      return { ...state, loadingArtists: false };
    default:
      return state;
  }
};

export default artistsReducer;
