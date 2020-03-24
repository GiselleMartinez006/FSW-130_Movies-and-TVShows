const redux = require("redux")
const {combineReducers, createStore} = redux


const { movieReducer } = require("./movies")
const { showReducer } = require ("./shows")



const rootReducer = combineReducers({
    movie: movieReducer,
    show: showReducer
})



const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})

module.exports = { store }

function addMovie(movie) {
    return {
        type: "ADD_MOVIE",
        payload: movie
    }
}

function removeMovie(movie) {
    return {
        type: "REMOVE_MOVIE",
        payload: movie
    }
}

function movieReducer(movie = [], action) {
    switch(action.type) {
        case "ADD_MOVIE":
            return [...state.movie, action.payload]
            
        case "REMOVE_MOVIE":{
            const updatedArr = state.movie.filter(movie => movie.toLowerCase() !==
            action.payload.toLowerCase())
            return updatedArr          
        }
        default: 
            return movie
    }
}

module.exports.movieReducer = movieReducer
module.exports = {addMovie, removeMovie}


function addShow(show) {
    return {
        type: "ADD_SHOW",
        payload: show
    }
}

function removeShow(show) {
    return {
        type: "REMOVE_SHOW",
        payload: show
    }
}

function showReducer(show = [], action) {
    switch(action.type) {
        case "ADD_SHOW":
            return [...state.show, action.payload]
            
        case "REMOVE_SHOW":{
            const updatedArr = state.show.filter(show => show.toLowerCase() !==
            action.payload.toLowerCase())
            return updatedArr          
        }
        default: 
            return show
    }
}

module.exports.showReducer = showReducer
module.exports = {addShow, removeShow }