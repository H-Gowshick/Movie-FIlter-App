import React, { useState } from "react";
import "./App.css";
import MovieCard from "./Pages/MovieCard";
import MovieFilter from "./Pages/MoviesFilter";
import Movies from "./assets/Json/Movies.json";

const App = () => {
  // States to hold the filtered movies
  const [filteredMovies, setFilteredMovies] = useState(Movies);

  // Function to handle filtering based on selected filters
  const handleFilter = (selectedFilters) => {
    // If no filters selected, display all movies
    if (selectedFilters.length === 0) {
      setFilteredMovies(Movies);
    } else {
      // Filter movies based on selected genres
      const filtered = Movies.filter((movie) =>
        selectedFilters.some((filter) => movie.moviegenres.includes(filter))
      );
      setFilteredMovies(filtered);
    }
  };

  // Extract unique genres from all movies
  const uniqueGenres = [
    ...new Set(Movies.flatMap((movie) => movie.moviegenres)),
  ];

  // filters object with genres
  const filters = {
    Genre: uniqueGenres,
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      {/* Rendering MovieFilter component with filters and handleFilter function */}
      <MovieFilter filters={filters} handleFilter={handleFilter} />
      {/* Display movies */}
      {filteredMovies?.length > 0 ? (
        <div className="container">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        // display message if no movies found
        <div className="empty">
          <div>No movies found</div>
        </div>
      )}
    </div>
  );
};

export default App;
