import React from "react";
import { MovieControls } from "../movieControls/MovieControls";

export const MovieCard = ({ movie, type }) => {
  const imageSize = {
    width: "200px",
    height: "300px",
  };

  return (
    <div className="movie-card">
      <div className="overlay"></div>

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

      <MovieControls type={type} movie={movie} />
    </div>
  );
};
