import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import { fetchAlbums } from '../../store/slices/albumSlice';
import AlbumItem from './AlbumItem';

const Albums = (props) => {
  const albums = useSelector((state) => state.albums.albums);
  // const loadingAlbums = useSelector((state) => state.albums.loadingAlbums);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbums(props.match.params.id));
  }, [dispatch, props.match.params.id]);
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container justify="space-between" alignItems="center">
        <Grid item>
          <Typography variatn="h4">Albums</Typography>
        </Grid>
      </Grid>

      <Grid item container spacing={1}>
        {albums.map((album) => (
          <AlbumItem title={album.title} key={album._id} _id={album._id} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Albums;
