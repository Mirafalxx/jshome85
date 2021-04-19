import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import ArtistItem from './ArtistItem';
import { fetchArtists } from '../../store/actions/artistsActions';

const Artists = () => {
  const artists = useSelector((state) => state.artists.artists);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArtists());
  }, [dispatch]);

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container justify="space-between" alignItems="center">
        <Grid item>
          <Typography variatn="h4">Artists</Typography>
        </Grid>
      </Grid>

      <Grid item container spacing={1}>
        {artists.map((artist) => (
          <ArtistItem name={artist.name} key={artist._id} _id={artist._id} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Artists;
