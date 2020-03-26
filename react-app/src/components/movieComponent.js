import React from "react";
import "../styling/movies.css"

class Movie extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      moviesArray: this.props.movieArray
    }
  }
  render() {
    return <div>
        <h1 className="mainHeading">Movies: </h1>
        {this.state.moviesArray.map((movie, num) => {
          return(<div className="movies" key={num}>
        
        <h1>Title: {movie.title}</h1>
        <h1>Genre: {movie.genre}</h1>
        <h1>Rating: {movie.rated}</h1>
        <h1>Release Date: {movie.releaseDate}</h1>
        </div>)})
  }     

        {console.log(this.state.moviesArray)}
        
      </div>
  }
}
export default Movie;
