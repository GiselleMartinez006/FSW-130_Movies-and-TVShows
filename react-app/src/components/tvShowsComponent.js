import React from "react";

import "../styling/movies.css"

class TvShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showsArray: this.props.showArray
    }
  }
  render() {
    return <div>
        <h1 className="mainHeading">Shows: </h1>
        {this.state.showsArray.map((show, num) => {
          return(<div className="movies" key={num}>
        
        <h1>Title: {show.title}</h1>
        <h1>Genre: {show.genre}</h1>
        <h1>Rated: {show.rated}</h1>
        </div>)})
  }     

        {console.log(this.state.showsArray)}
        
      </div>
  }
}
export default TvShow;
