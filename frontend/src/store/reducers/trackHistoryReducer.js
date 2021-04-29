import {
  FETCH_TRACK_HISTORY_FAILURE,
  FETCH_TRACK_HISTORY_REQUEST,
  FETCH_TRACK_HISTORY_SUCCESS,
} from '../actions/trackHistoryActions';

const initialState = {
  trackHistory: [],
  loadingTrackHistory: false,
};

const trackHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRACK_HISTORY_REQUEST:
      return { ...state, loadingTrackHistory: true };
    case FETCH_TRACK_HISTORY_SUCCESS:
      return { ...state, loadingTrackHistory: false, trackHistory: action.trackHistory };
    case FETCH_TRACK_HISTORY_FAILURE:
      return { ...state, loadingTrackHistory: false };
    default:
      return state;
  }
};

export default trackHistoryReducer;
