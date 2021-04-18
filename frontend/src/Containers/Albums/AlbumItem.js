import React from 'react';
import { Card, CardActions, CardHeader, Grid, makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  card: {
    height: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
});

const AlbumItem = ({ title, _id }) => {
  const classes = useStyles();
  return (
    <Grid item xs sm md={6} lg={4} component={Link} to={'/tracks/' + _id} style={{ textDecoration: 'none' }}>
      <Card className={classes.card}>
        <CardHeader title={title} />
        <CardActions>
          <IconButton>
            <ArrowForwardIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default AlbumItem;
