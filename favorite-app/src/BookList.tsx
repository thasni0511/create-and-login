import { useContext, useMemo } from "react";
import BookContext from "./BookContext";
import { STATIC_BOOKS } from "./books";

function BookList() {
  const { searchQuery, addFavorite, favorites } = useContext(BookContext);

  const filteredBooks = useMemo(() => {
    return STATIC_BOOKS.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="book-list">
      {filteredBooks.length === 0 ? (
        <p>No books found.</p>
      ) : (
        filteredBooks.map((book) => {
          const isFavorited = favorites.some((fav) => fav.id === book.id);

          return (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.title} />
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">{book.author}</p>
              <button
                onClick={() => addFavorite(book)}
                disabled={isFavorited}
              >
                {isFavorited ? "Favorited" : "Add to Favorites"}
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}

export default BookList;
