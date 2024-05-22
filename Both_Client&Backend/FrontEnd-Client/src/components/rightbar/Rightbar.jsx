import React, { useEffect, useState } from "react";
import axios from "axios";
import "./rightbar.scss";

const Rightbar = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const imageSize = {
    width: "200px",
    height: "300px",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
          {
            headers: {
              "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
              "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
            },
          }
        );

        setUpcomingMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Upcoming Movies</span>
          <br />
          <br />
          {upcomingMovies.map((movie) => (
            <div key={movie.id} className="movie">
              {movie.primaryImage && movie.primaryImage.url ? (
                <img
                  src={movie.primaryImage.url}
                  alt={`${movie.titleText.text} Poster`}
                  style={imageSize}
                />
              ) : (
                <div className="filler-poster">
                  <img
                    src="https://i.pinimg.com/originals/35/34/7e/35347ec7a1b122326d2ecde5133bbba8.jpg"
                    alt={`${movie.titleText.text} Poster`}
                    style={imageSize}
                  />
                </div>
              )}
              <p>{movie.titleText.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
