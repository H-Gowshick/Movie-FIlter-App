import React, { useState } from "react";

const MovieFilter = ({ filters, handleFilter }) => {
  // State to hold the selected filters
  const [selectedFilters, setSelectedFilters] = useState([]);

  // Function to toggle filter selection
  const toggleFilter = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  // Function to clear all filters
  const clearFilters = () => {
    setSelectedFilters([]);
    handleFilter([]); // Reset filters and display all movies
  };

  return (
    <div className="filter">
      {/* Iterate over filters and render filter options */}
      {Object.entries(filters).map(([category, values]) => (
        <div key={category}>
          <h2>Filter by {category}</h2>
          {/* Render checkbox inputs for each filter option */}
          {values.map((value) => (
            <div key={value}>
              <label>
                <input
                  type="checkbox"
                  value={value}
                  checked={selectedFilters.includes(value)}
                  onChange={() => toggleFilter(value)}
                />
                {value}
              </label>
            </div>
          ))}

          <div style={{ display: "flex", gap: "10px" }}>
            {category === "Genre" && (
              <button onClick={clearFilters}>Clear</button>
            )}{" "}
            {/* Clear button for filter */}
            <button onClick={() => handleFilter(selectedFilters)}>
              {" "}
              {/* filter button */}
              Apply Filter
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieFilter;
