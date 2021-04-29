import Grid from '@material-ui/core/Grid';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import FormElement from '../../../Components/UI/Form/FormElement';
import { useDispatch } from 'react-redux';
import { addArtists } from '../../../store/actions/artistsActions';

const ArtistForm = () => {
  const dispatch = useDispatch();
  const [artist, setArtist] = useState({
    name: '',
    information: '',
  });
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setArtist((prev) => ({ ...prev, [name]: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setArtist({ name: '', information: '' });
    dispatch(addArtists({ ...artist }));
    // console.log(artist);
  };
  return (
    <form onSubmit={submitHandler}>
      <Grid container direction="column" spacing={2}>
        <FormElement required label="Artist name" name="name" onChange={inputChangeHandler} />
        <FormElement label="Artist Information" name="information" onChange={inputChangeHandler} />
        <Grid item xs>
          <Button type="submit" color="primary" variant="contained">
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ArtistForm;
