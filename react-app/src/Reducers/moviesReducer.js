let moviesDefaultState = [
  {
    title: "Conclusion",
    genre: "Sci-Fi",
    rated: "PG",
    "release date": "April, 2014",
    id: 1
  },
  {
    title: "Excaliber",
    genre: "Fantasy",
    rated: "PG",
    "release date": "April, 1981",
    id: 2
  },
  {
    title: "The Never Ending Story",
    genre: "Family",
    rated: "PG",
    "release date": "July, 1984",
    id: 3
  }
];
const moviesReducer = (state = moviesDefaultState, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return [...state, action.payload];
      break;
    case "DELETE_MOVIE":
      let filteredMovies = state.filter(movieObject => {
        if (movieObject.title === action.payload) {
          return false;
        } else {
          return true;
        }
      });
      return filteredMovies;
      break;
    default:
      return state;
  }
};

module.exports.reducer = moviesReducer;
<<<<<<< HEAD
export default moviesReducer;
=======
export default moviesReducer
>>>>>>> 4c9d5650928c096e9a8a71c6344c626dcb8dafc5
