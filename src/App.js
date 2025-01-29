import React, { useState } from "react";
import gainaxMovies from "./data/gainaxMovies.json";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import PopularFilms from "./components/PopularFilms";
import "./App.css"

function App() {
  const [movies, setMovies] = useState(gainaxMovies);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
    setMovies(
      gainaxMovies.filter((movie) =>
        movie.title.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  return (
    <div>
      <Header />
      <PopularFilms />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
