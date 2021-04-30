import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import TrackItem from './TrackItem';
import { fetchTracks } from '../../store/actions/tracksAction';
import { addTrackHistory } from '../../store/actions/trackHistoryActions';

const Tracks = (props) => {
  const tracks = useSelector((state) => state.tracks.tracks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTracks(props.match.params.id));
  }, [dispatch, props.match.params.id]);
  console.log(tracks);
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container justify="space-between" alignItems="center">
        <Grid item>
          <Typography variatn="h4">Albums</Typography>
        </Grid>
      </Grid>

      <Grid item container spacing={1}>
        {tracks.map((track) => (
          <TrackItem name={track.name} key={track._id} addToHistory={() => dispatch(addTrackHistory({ track }))} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Tracks;
