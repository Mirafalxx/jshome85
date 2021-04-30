import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import AlbumItem from './AlbumItem';
import { fetchAlbums } from '../../store/actions/albumsAction';

const Albums = (props) => {
  const albums = useSelector((state) => state.albums.albums);

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
          <AlbumItem name={album.name} key={album._id} _id={album._id} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Albums;
