// function thats going to return some state data

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      //returns the inital state of watchlist but will add the selected movie into it as well
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      //remove the id we pass it from the sate
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case "ADD_MOVIE_TO_WATCHED":
      //removed movie from watchlist and add to watched list
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched],
      };
    case "MOVE_TO_WATCHLIST":
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };
    default:
      return state;
  }
};

export default AppReducer;
