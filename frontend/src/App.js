import { Route, Switch } from 'react-router-dom';
import AppToolbar from './Components/UI/AppToolBar/AppToolBar';
import ListArtist from './Containers/Artists/Artists';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';
import ListAlbums from './Containers/Albums/Albums';
import ListTracks from './Containers/Tracks/Tracks';
import Login from './Containers/Login/Login';
import Register from './Containers/Register/Register';

const App = () => {
  return (
    <>
      <CssBaseline />
      <header style={{ textAlign: 'center' }}>
        <AppToolbar />
      </header>
      <main>
        <Container maxWidth="xl">
          <Switch>
            <Route path="/" exact component={ListArtist} />
            <Route path="/albums/:id" component={ListAlbums} />
            <Route path="/tracks/:id" component={ListTracks} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </Container>
      </main>
    </>
  );
};

export default App;
