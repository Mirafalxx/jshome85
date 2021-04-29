import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { AppBar, Grid, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AnonymusMenu from '../Menu/AnonymousMenu';
import UserMenu from '../Menu/UserMenu';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  mainLink: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      color: 'inherit',
    },
  },
  staticToolbar: {
    marginBottom: theme.spacing(2),
  },
}));

const AppToolbar = () => {
  const user = useSelector((state) => state.users.user);

  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item>
              <Typography variant="h6">
                <Link to="/" className={classes.mainLink}>
                  Music API
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              {user ? (
                <Button component={Link} to="/track_history" color="inherit">
                  Track History
                </Button>
              ) : null}
            </Grid>
            <Grid item>{user ? <UserMenu user={user} /> : <AnonymusMenu />}</Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.staticToolbar} />
    </>
  );
};

export default AppToolbar;
