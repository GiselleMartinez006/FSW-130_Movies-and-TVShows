import React from "react";
import "./App.css";
import Home from "./components/Home";
import Movies from "./components/Movies";
import TVShows from "./components/TVShows.js";
const Redux = require("redux");
let moviesReducerModule = require("./Reducers/moviesReducer");
let tvshowsReducerModule = require("./Reducers/tvshowsReducer");

function App() {
  let combinedReducer = Redux.combineReducers({
    movies: moviesReducerModule.reducer,
    tvshows: tvshowsReducerModule.reducer
  });

  const store = Redux.createStore(combinedReducer);

  store.dispatch({
    type: "ADD_MOVIE",
    payload: {
      title: "Pan's Labyrinth",
      genre: "Fantasy",
      rated: "R",
      "release date": "January, 2007"
    }
  });

  store.dispatch({
    type: "ADD_TVSHOW",
    payload: {
      title: "Walking Dead",
      location: "Senoia, Georgia",
      genre: "Thriller"
    }
  });

  return;
  <main>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/movies" component={Movie} />
      <Route path="/tvshow" component={TVShow} />
    </Switch>
  </main>;
}

export default App;
