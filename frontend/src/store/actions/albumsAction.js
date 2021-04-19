import axiosApi from '../../axiosApi';

export const FETCH_ALBUMS_REQUEST = 'FETCH_ALBUMS_REQUEST';
export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_ALBUMS_FAILURE = 'FETCH_ALBUMS_FAILURE';

export const fetchAlbumsRequest = () => ({ type: FETCH_ALBUMS_REQUEST });
export const fetchAlbumsSuccess = (albums) => ({ type: FETCH_ALBUMS_SUCCESS, albums });
export const fetchAlbumsFailure = () => ({ type: FETCH_ALBUMS_FAILURE });

export const fetchAlbums = (artistID) => {
  return async (dispatch) => {
    try {
      dispatch(fetchAlbumsRequest());
      const response = await axiosApi.get(`/albums/?artist=${artistID}`);
      dispatch(fetchAlbumsSuccess(response.data));
    } catch (error) {
      dispatch(fetchAlbumsFailure());
    }
  };
};
