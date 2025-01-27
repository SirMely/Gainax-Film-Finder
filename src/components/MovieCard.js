function MovieCard({ movie }) {
    return (
        <div>
            <img src={movie.poster} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <p>Directed by: {movie.director}</p>
            <p>Year: {movie.year}</p>
        </div>
    );
}

export default MovieCard;
