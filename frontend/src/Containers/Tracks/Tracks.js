import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import { fetchTrack } from '../../store/slices/trackSlice';
import TrackItem from './TrackItem';

const Tracks = (props) => {
  const tracks = useSelector((state) => state.tracks.tracks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrack(props.match.params.id));
  }, [dispatch, props.match.params.id]);
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container justify="space-between" alignItems="center">
        <Grid item>
          <Typography variatn="h4">Albums</Typography>
        </Grid>
      </Grid>

      <Grid item container spacing={1}>
        {tracks.map((track) => (
          <TrackItem title={track.title} key={track._id} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Tracks;
