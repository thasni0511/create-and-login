import { useContext } from "react";
import BookContext from "./BookContext";

function FavoriteBooks() {
  const { favorites, removeFavorite } = useContext(BookContext);

  if (favorites.length === 0) return <p>No favorites added yet.</p>;

  return (
    <div className="favorites-list">
      {favorites.map((book) => (
        <div key={book.id} className="book-card">
          <img src={book.image} alt={book.title} />
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">{book.author}</p>
          <button onClick={() => removeFavorite(book.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default FavoriteBooks;
