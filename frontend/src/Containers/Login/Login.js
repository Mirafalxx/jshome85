import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Avatar, Button, Container, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { loginUser } from '../../store/actions/usersActions';
import FormElement from '../../Components/UI/Form/FormElement';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import GoogleLogin from '../../Components/UI/GoogleLogin/GoogleLogin';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  header: {
    marginBottom: theme.spacing(2),
  },
}));

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const error = useSelector((state) => state.users.loginError);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const submitFormHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser({ ...user }));
  };
  return (
    <Container component="section" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.header}>
          Sign in
        </Typography>

        <Grid container spacing={1} direction="column" component="form" onSubmit={submitFormHandler}>
          {error && (
            <Grid item xs>
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {error.message || error.glogal}
              </Alert>
            </Grid>
          )}
          <FormElement label="email" type="text" onChange={inputChangeHandler} name="email" value={user.email} />
          <FormElement
            label="password"
            type="password"
            onChange={inputChangeHandler}
            name="password"
            value={user.password}
          />
          <Grid item xs>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Sign in
            </Button>
          </Grid>
          <Grid item xs>
            <GoogleLogin />
          </Grid>
          <Grid item container justify="flex-end">
            <Grid item>
              <Link component={RouterLink} variant="body2" to="/register">
                Or Sign up
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Login;
