import React from "react";
import { useState } from "react";
import { ResultCard } from "../resultCard/ResultCard";
import axios from "axios";
import "./add.css";
import AddHomeIcon from "@mui/icons-material/AddHome";
import { Link } from "react-router-dom";

export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = async (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    const options = {
      method: "GET",
      url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${e.target.value}`,
      params: {
        exact: "false",
        titleType: "movie",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setResults(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <h1>
              Search & Add Movies{" "}
              <Link to="/">
                <span className="home-Icon">
                  <AddHomeIcon />
                </span>
              </Link>
            </h1>

            <input
              type="text"
              value={query}
              onChange={onChange}
              placeholder="Search for a movie"
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
