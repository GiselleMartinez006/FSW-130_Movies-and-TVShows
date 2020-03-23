import React from "react";
import "./App.css";
import Home from "./components/Home";
import Movies from "./components/Movies";
import TVShows from "./components/TVShows.js";
import { Route, Switch } from "react-router-dom";
import { createStore, combineReducers, getState } from "redux";
import moviesReducerModule from "./redux/movies";
import tvshowsReducerModule from "./redux/shows";


function App() {
  let combinedReducer = combineReducers({
    movies: moviesReducerModule.reducer,
    tvshows: tvshowsReducerModule.reducer
  });
console.log(combinedReducer)
  const store = createStore(combinedReducer);

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

  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movies" component={Movies} />
        <Route path="/tvshow" component={TVShows} />
      </Switch>
    </main>
  );
}

export default App;
