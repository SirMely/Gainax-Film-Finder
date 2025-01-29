import React, { useState } from "react";
import MovieCard from "./MovieCard";
import "./MovieCard.css";
import SearchAndFilterBar from "./SearchAndFilterBar";

function MovieList({ movies = [] }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("title");
    const [typeFilter, setTypeFilter] = useState("all"); // New state for type filter

    // Filter movies by search query
    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Apply Type Filter (Movies, TV Shows, OVAs)
    const typeFilteredMovies = typeFilter === "all"
        ? filteredMovies
        : filteredMovies.filter((movie) => movie.type === typeFilter);

    // Sort movies based on the selected sort option
    const sortedMovies = [...typeFilteredMovies].sort((a, b) => {
        if (sortOption === "title") {
            return a.title.localeCompare(b.title);
        } else if (sortOption === "year") {
            return a.year - b.year;
        } else if (sortOption === "director") {
            return a.director.localeCompare(b.director);
        }
        return 0; // Default fallback
    });

    return (
        <section className="filmography-section"> 
            {/* Search and Filter Bar */}
            <SearchAndFilterBar
                onSearch={setSearchQuery}
                onSortChange={setSortOption}
                onTypeChange={setTypeFilter}
            />

            {/* Render Filtered and Sorted Movies */}
            <div className="movie-list">
                {sortedMovies.length > 0 ? (
                    sortedMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                ) : (
                    <p>No movies found.</p>
                )}
            </div>
        </section>
    );
}

export default MovieList;
