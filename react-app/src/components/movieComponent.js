import React from "react";

class Movie extends React.Component {
  render() {
    return <h1>Movies: {this.props.name}</h1>;
  }
}
export default Movie;
