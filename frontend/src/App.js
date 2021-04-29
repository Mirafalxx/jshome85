import { Route, Switch } from 'react-router-dom';
import AppToolbar from './Components/UI/AppToolBar/AppToolBar';
import ListArtist from './Containers/Artists/Artists';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';
import ListAlbums from './Containers/Albums/Albums';
import ListTracks from './Containers/Tracks/Tracks';
import Login from './Containers/Login/Login';
import Register from './Containers/Register/Register';
import TrackHistory from './Containers/TrackHistory/TrackHistory';
import ArtistForm from './Containers/Artists/ArtistForm/ArtistForm';
import AlbumForm from './Containers/Albums/AlbumForm/AlbumForm';
import TrackForm from './Containers/Tracks/TrackForm/TrackForm';

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
            <Route path="/track_history" component={TrackHistory} />
            <Route path="/artists" component={ArtistForm} />
            <Route path="/albums" component={AlbumForm} />
            <Route path="/tracks" component={TrackForm} />
          </Switch>
        </Container>
      </main>
    </>
  );
};

export default App;
