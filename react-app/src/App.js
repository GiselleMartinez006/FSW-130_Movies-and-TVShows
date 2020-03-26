import React from "react";
import "./App.css";
import Home from "./components/Home";
import Movies from "./components/movieComponent";
import TVShows from "./components/tvShowsComponent";
import { Switch, Route } from "react-router-dom";
// import { createStore, combineReducers, getState } from "redux";
// import moviesReducerModule from "./redux/movies";
// import tvshowsReducerModule from "./redux/shows";
import { connect } from "react-redux";

function App(props) {
  // store.dispatch({
  //   type: "ADD_MOVIE",
  //   payload: {
  //     title: "Pan's Labyrinth",
  //     genre: "Fantasy",
  //     rated: "R",
  //     "release date": "January, 2007"
  //   }
  // });

  // store.dispatch({
  //   type: "ADD_TVSHOW",
  //   payload: {
  //     title: "Walking Dead",
  //     location: "Senoia, Georgia",
  //     genre: "Thriller"
  //   }
  // });

  return (
    <main>
      {console.log(props)}
     
      <Switch>
        <Route exact path="/" exact render={() => <Home />} />
        <Route exact path="/movies" exact render={() => <Movies movieArray={props.movies} />} />
        <Route path="/tvshows" component={TVShows} />
      </Switch>
    </main>
  );
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    shows: state.shows
  };
};
export default connect(mapStateToProps)(App);
