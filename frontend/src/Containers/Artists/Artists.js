import React, { useEffect } from "react";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import makeStyles from "@material-ui/core/styles/makeStyles";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import ArtistItem from "./ArtistItem";
import { fetchArtists } from "../../store/slices/artistSlice";

const Artists = () => {
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artists.artists);
  console.log(artists);
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
          <ArtistItem name={artist.name} key={artist._id} details={() => console.log("123")} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Artists;
