import { useContext } from "react";
import MovieContext from "./MovieContext";

function FavoritesList() {
  const { favorites,setFavorites } = useContext(MovieContext);

  const removeFavorite = (movie: string) => 
    {
  setFavorites(favorites.filter((i) => i !== movie));
    };
  return (
    <div className="card">
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p className="muted">You haven't added any favorites yet.</p>
      ) : (
        <ul className="favorites-list">
          {favorites.map((movie) => (
            <li key={movie}>⭐ {movie}<button onClick={() => removeFavorite(movie)}>Remove</button>
        </li>

          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritesList;

