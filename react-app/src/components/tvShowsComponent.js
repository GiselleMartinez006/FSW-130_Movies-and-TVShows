import React from "react";

class TvShow extends React.Component {
  render() {
    return (
      <div>
        <h1 className="mainHeading">Shows: </h1>
        {this.props.showArray.map((show, num) => {
          return (
            <div className="shows" key={num}>
              <h1>Title: {show.title}</h1>
              <h1>Genre: {show.genre}</h1>
              <h1>Rating: {show.rated}</h1>
            </div>
          );
        })}

        {console.log(this.props.showArray)}
      </div>
    );
  }
}
export default TvShow;
