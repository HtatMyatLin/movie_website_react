import { useEffect, useState } from "react";

import MovieCard from "./MovieCard";

import "./App.css";

import searchIcon from "./search.svg";
//c032e2d7

const API_URL = "http://www.omdbapi.com/?apikey=9blaa3b";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTearm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=9blaa3b&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTearm(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="searchicon"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
