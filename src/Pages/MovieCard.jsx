import React, { useState } from "react";

const MovieCard = ({ movie }) => {
  // State variables to toggle display more languages, genres, and countries
  const [showMoreLanguages, setShowMoreLanguages] = useState(false);
  const [showMoreGenres, setShowMoreGenres] = useState(false);
  const [showMoreCountries, setShowMoreCountries] = useState(false);

  // Function to toggle display more languages
  const toggleLanguages = () => {
    setShowMoreLanguages(!showMoreLanguages);
  };

  // Function to toggle display more genres
  const toggleGenres = () => {
    setShowMoreGenres(!showMoreGenres);
  };

  // Function to toggle display more countries
  const toggleCountries = () => {
    setShowMoreCountries(!showMoreCountries);
  };

  return (
    <div className="movie">
      <div>
        <strong>{movie.movietitle}</strong> {/* Display movie title */}
      </div>
      <div>
        <img
          src={
            movie.moviemainphotos && movie.moviemainphotos.length > 0
              ? movie.moviemainphotos[0]
              : "https://upload.wikimedia.org/wikipedia/commons/2/26/512pxIcon-sunset_photo_not_found.png"
          } // Display movie main photo or placeholder if not available
          alt={movie.movietitle}
        />
      </div>
      <div className="movie-details">
        <p>
          <strong>Languages:</strong>{" "}
          {showMoreLanguages
            ? movie.movielanguages.join(", ") // display all languages if toggled
            : movie.movielanguages.slice(0, 1).join(", ")}{" "}
          {/* display first language if not toggled */}
          {movie.movielanguages.length > 1 && (
            <span onClick={toggleLanguages}>
              {showMoreLanguages ? " (Less)" : " (More)"}{" "}
              {/* Toggle button for languages */}
            </span>
          )}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {showMoreGenres
            ? movie.moviegenres.join(", ") // display all genres if toggled
            : movie.moviegenres.slice(0, 1).join(", ")}{" "}
          {/* display first genre if not toggled */}
          {movie.moviegenres.length > 1 && (
            <span onClick={toggleGenres}>
              {showMoreGenres ? " (Less)" : " (More)"}{" "}
              {/* Toggle button for genres */}
            </span>
          )}
        </p>
        <p>
          <strong>Countries:</strong>{" "}
          {movie.moviecountries.length > 0
            ? showMoreCountries
              ? movie.moviecountries.join(", ") // display all countries if toggled
              : movie.moviecountries.slice(0, 1).join(", ") // display first country if not toggled
            : "No data found"}
          {movie.moviecountries.length > 1 && (
            <span onClick={toggleCountries}>
              {showMoreCountries ? " (Less)" : " (More)"}{" "}
              {/* Toggle button for countries */}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
