import axiosApi from '../../axiosApi';

export const FETCH_ARTISTS_REQUEST = 'FETCH_ARTISTS_REQUEST';
export const FETCH_ARTISTS_SUCCESS = 'FETCH_ARTISTS_SUCCESS';
export const FETCH_ARTISTS_FAILURE = 'FETCH_ARTISTS_FAILURE';

export const fetchArtistsRequest = () => ({ type: FETCH_ARTISTS_REQUEST });
export const fetchArtistsSuccess = (artists) => ({ type: FETCH_ARTISTS_SUCCESS, artists });
export const fetchArtistsFailure = () => ({ type: FETCH_ARTISTS_FAILURE });

export const fetchArtists = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchArtistsRequest());
      const response = await axiosApi.get('/artists');
      dispatch(fetchArtistsSuccess(response.data));
    } catch (error) {
      dispatch(fetchArtistsFailure());
    }
  };
};
