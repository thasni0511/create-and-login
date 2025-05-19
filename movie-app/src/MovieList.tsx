import { useContext } from "react";
import MovieContext from "./MovieContext";

const movies: string[] = [
  "While you were sleeping", 
  "Stranger things", 
  "Interstellar", 
  "Avatar",
  "The Dark Knight",
  "Matrix"
];

function MovieList() {
  const { favorites, setFavorites } = useContext(MovieContext);

  const addFavorite = (movie: string) => {
    if (!favorites.includes(movie)) {
      setFavorites([...favorites, movie]);  
    }
  };


  return (
    <div className="card">
      <h2>All Movies</h2>
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie}>
            <span>{movie}</span>
            <button onClick={() => addFavorite(movie)}> Add</button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
