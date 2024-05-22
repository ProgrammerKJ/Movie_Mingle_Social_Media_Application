import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalStateContext";
import { MovieCard } from "../movieCard/MovieCard";
import AddHomeIcon from "@mui/icons-material/AddHome";
import { Link } from "react-router-dom";

export const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">
            Watched Movies{" "}
            <Link to="/">
              <span className="home-Icon">
                <AddHomeIcon />
              </span>
            </Link>
          </h1>

          <span className="count-pill">
            {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">Currently No Movies In Your Watchlist</h2>
        )}
      </div>
    </div>
  );
};
