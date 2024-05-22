import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalStateContext";
import { MovieCard } from "../movieCard/MovieCard";
import AddHomeIcon from "@mui/icons-material/AddHome";
import { Link } from "react-router-dom";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">
            My Watchlist{" "}
            <Link to="/">
              <span className="home-Icon">
                <AddHomeIcon />
              </span>
            </Link>
          </h1>

          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">Currently No Movies In Your Watchlist</h2>
        )}
      </div>
    </div>
  );
};
