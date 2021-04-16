import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainLink: {
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      color: "inherit",
    },
  },
  staticToolbar: {
    marginBottom: theme.spacing(2),
  },
}));

const AppToolBar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item>
              <Typography variant="h6">Music Application</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.staticToolbar} />
    </>
  );
};

export default AppToolBar;
