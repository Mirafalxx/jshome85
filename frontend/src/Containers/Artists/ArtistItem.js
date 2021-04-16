import React from "react";
import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid, makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
const useStyles = makeStyles({
  card: {
    height: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
});
const ArtistItem = ({ name, details }) => {
  const classes = useStyles();
  return (
    <Grid item xs sm md={6} lg={4}>
      <Card className={classes.card}>
        <CardHeader title={name} />
        <CardActions>
          <IconButton onClick={details}>
            <ArrowForwardIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ArtistItem;
