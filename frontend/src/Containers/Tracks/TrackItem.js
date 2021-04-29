import React from 'react';
import { Card, CardActions, CardHeader, Grid, makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  card: {
    height: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
});

const TrackItem = ({ title, addToHistory }) => {
  const classes = useStyles();
  const user = useSelector((state) => state.users.user);
  return (
    <Grid item xs sm md={6} lg={4}>
      <Card className={classes.card}>
        <CardHeader title={title} />
        {user ? (
          <CardActions>
            <IconButton onClick={addToHistory}>
              <AddCircleIcon />
            </IconButton>
          </CardActions>
        ) : null}
      </Card>
    </Grid>
  );
};

export default TrackItem;
