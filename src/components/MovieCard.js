import React, { useState } from "react";
import "./MovieCard.css";

function MovieCard({ movie }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped); // Toggle flip state
    };

    return (
        <div className={`movie-card ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
            {/* Front of the card */}
            <div className="movie-card-front">
                <img src={movie.poster} alt={movie.title} className="movie-poster" />
                <h3 className="movie-title">{movie.title}</h3>
            </div>

            {/* Back of the card */}
            <div className="movie-card-back">
                <h3 className="movie-title">{movie.title}</h3>
                <p><strong>Year:</strong> {movie.year}</p>
                <p><strong>Director:</strong> {movie.director}</p>
                <p><strong>Description:</strong> {movie.description}</p>
                <p><strong>Runtime:</strong> {movie.runtime || "Unknown"}</p>
            </div>
        </div>
    );
}

export default MovieCard;
