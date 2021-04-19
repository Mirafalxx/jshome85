import { FETCH_ALBUMS_FAILURE, FETCH_ALBUMS_REQUEST, FETCH_ALBUMS_SUCCESS } from '../actions/albumsAction';

const initialState = {
  albums: [],
  loadingAlbums: false,
};

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUMS_REQUEST:
      return { ...state, loadingAlbums: true };
    case FETCH_ALBUMS_SUCCESS:
      return { ...state, loadingAlbums: false, albums: action.albums };
    case FETCH_ALBUMS_FAILURE:
      return { ...state, loadingAlbums: false };
    default:
      return state;
  }
};

export default albumsReducer;
