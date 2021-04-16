import { Container, CssBaseline } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import React from "react";
import AppToolBar from "./Components/UI/AppToolBar/AppToolBar";
import Artists from "./Containers/Artists/Artists";

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
          </Switch>
        </Container>
      </main>
    </>
  );
};

export default App;
