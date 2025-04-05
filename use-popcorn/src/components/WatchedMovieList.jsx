export default function WatchedMovieList({
  watched,
  onDeleteWatched,
  handleClick,
}) {
  return (
    <ul className="list list-movies invisible-scrollbar">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbId}
          onDeleteWatched={onDeleteWatched}
          handleClick={handleClick}
        />
      ))}
    </ul>
  );
}
function WatchedMovie({ movie, onDeleteWatched, handleClick }) {
  return (
    <li onClick={() => handleClick(movie.imdbId)}>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>

        <button
          className="btn-delete"
          onClick={() => onDeleteWatched(movie.imdbId)}
        >
          X
        </button>
      </div>
    </li>
  );
}
