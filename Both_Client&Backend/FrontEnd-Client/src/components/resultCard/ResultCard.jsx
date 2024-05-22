import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalStateContext";

export const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, watchlist, watched, addMovieToWatched } =
    useContext(GlobalContext);

  let storedMovie = watchlist.find((m) => m.id === movie.id);
  let storedMovieWatched = watched.find((m) => m.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  const imageSize = {
    width: "200px",
    height: "300px",
  };
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.primaryImage && movie.primaryImage.url ? (
          <img
            src={`${movie.primaryImage.url}`}
            alt={`${movie.titleText.text} Poster`}
            style={imageSize}
          />
        ) : (
          <div className="filler-poster">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3171/3171927.png"
              alt={`${movie.titleText.text} Poster`}
              style={imageSize}
            />
          </div>
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.titleText.text}</h3>
          {movie.releaseDate && movie.releaseDate.year ? (
            <h4 className="release-date">{movie.releaseDate.year}</h4>
          ) : (
            <h4 className="release-date">Unknown</h4>
          )}
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};
