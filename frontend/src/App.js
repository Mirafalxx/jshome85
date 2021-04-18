import { Container, CssBaseline } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import React from 'react';
import AppToolBar from './Components/UI/AppToolBar/AppToolBar';
import Artists from './Containers/Artists/Artists';
import Albums from './Containers/Albums/Albums';
import Tracks from './Containers/Tracks/Tracks';

const App = () => {
  return (
    <>
      <CssBaseline />
      <header>
        <AppToolBar />
      </header>
      <main>
        <Container maxWidth="xl">
          <Switch>
            <Route path="/" exact component={Artists} />
            <Route path="/albums/:id" component={Albums} />
            <Route path="/tracks/:id" component={Tracks} />
          </Switch>
        </Container>
      </main>
    </>
  );
};

export default App;
