import movieReducer from "./movies";
import showReducer from "./shows";
const redux = require("redux");
const { combineReducers, createStore } = redux;

const rootReducer = combineReducers({
  movies: movieReducer,
  shows: showReducer
});

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

export default store;
