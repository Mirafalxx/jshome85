import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import FormElement from '../../../Components/UI/Form/FormElement';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArtists } from '../../../store/actions/artistsActions';
import { postAlbum } from '../../../store/actions/albumsAction';

const AlbumForm = () => {
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artists.artists);
  const [album, setAlbum] = useState({
    title: '',
    releaseDate: '',
    artist: '',
  });
  useEffect(() => {
    dispatch(fetchArtists());
  }, [dispatch]);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setAlbum((prev) => ({ ...prev, [name]: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(postAlbum({ ...album }));
  };
  return (
    <form onSubmit={submitHandler}>
      <Grid container direction="column" spacing={2}>
        <FormElement required label="Title" name="title" onChange={inputChangeHandler} value={album.title} />
        <FormElement
          required
          label="Release Date"
          name="releaseDate"
          onChange={inputChangeHandler}
          value={album.releaseDate}
        />
        <FormElement
          select
          required
          label="Artist"
          name="artist"
          onChange={inputChangeHandler}
          value={album.artist}
          options={artists}
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

export default AlbumForm;
