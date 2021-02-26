import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Route } from "react-router-dom";
import store from "./store";
import MoviePage from "./MoviePage";
import PopularMovies from "./PopularMovies";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Provider store={store}>
          <div>
            <Route exact path="/" render={() => <PopularMovies />} />
            <Route
              exact
              path="/movie/:id"
              render={props => <MoviePage id={props.match.params.id} />}
            />
          </div>
        </Provider>
      </HashRouter>
    );
  }
}

export default App;

