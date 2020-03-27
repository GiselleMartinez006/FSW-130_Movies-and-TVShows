import React from "react";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Movies from "./components/movieComponent";
import TVShows from "./components/tvShowsComponent";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

function App(props) {
  return (
    <main
      style={{
        display: "grid",
        height: "95vh",
        gridTemplateRows: "auto 15vh",
        gridGap: "5vh",
        overflowY: "auto"
      }}
    >
      {console.log(props)}

      <Switch>
        <Route exact path="/" exact render={() => <Home />} />
        <Route
          exact
          path="/movies"
          exact
          render={() => <Movies movieArray={props.movies} />}
        />
        <Route
          path="/shows"
          exact
          render={() => <TVShows showArray={props.shows} />}
        />
      </Switch>
      <Footer />
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
