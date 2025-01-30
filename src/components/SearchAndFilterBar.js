import React from "react";
import "./SearchAndFilterBar.css";

function SearchAndFilterBar({ onSearch, onSortChange, onTypeChange }) {
    return (
        <div className="search-and-filters">

            <div className="filmName">
                <h1>Filmography</h1>
            </div>

            <div className="search-filter-bar">

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search for a title..."
                    onChange={(e) => onSearch(e.target.value)}
                />

                {/* Sorting Dropdown */}
                <select onChange={(e) => onSortChange(e.target.value)}>
                    <option value="title">Sort by Title</option>
                    <option value="year">Sort by Release Year</option>
                    <option value="director">Sort by Director</option>
                </select>

                {/* Type Filter Dropdown */}
                
                <select onChange={(e) => onTypeChange(e.target.value)}>
                    <option value="all">All Types</option>
                    <option value="Movies">Movies</option>
                    <option value="TV Show">TV Shows</option>
                    <option value="OVAs">OVAs</option>
                </select>
            </div>
        </div>
    );
}

export default SearchAndFilterBar;
