import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import FormElement from '../../../Components/UI/Form/FormElement';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbums } from '../../../store/actions/albumsAction';

const TrackForm = () => {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums.albums);
  const [track, setTrack] = useState({
    title: '',
    duration: '',
    album: '',
  });

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setTrack((prev) => ({ ...prev, [name]: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <Grid container direction="column" spacing={2}>
        <FormElement required label="Title" name="title" onChange={inputChangeHandler} value={track.title} />
        <FormElement required label="Duration" name="duration" onChange={inputChangeHandler} value={track.album} />
        <FormElement
          select
          required
          label="Album"
          name="album"
          onChange={inputChangeHandler}
          value={track.album}
          options={albums}
        />
        <Grid item xs>
          <Button type="submit" color="primary" variant="contained">
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TrackForm;
