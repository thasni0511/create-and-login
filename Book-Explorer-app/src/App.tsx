import { useState, useCallback } from "react";
import BookContext from "./BookContext";
import { Book } from "./books";
import BookSearch from "./BookSearch";
import BookList from "./BookList";
import FavoriteBooks from "./FavoriteBooks";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<Book[]>([]);

  const addFavorite = useCallback((book: Book) => {
    setFavorites((prev) => [...prev, book]);
  }, []);

  const removeFavorite = useCallback((id: string) => {
    setFavorites((prev) => prev.filter((b) => b.id !== id));
  }, []);

  return (
    <BookContext.Provider
      value={{ searchQuery, setSearchQuery, favorites, addFavorite, removeFavorite }}
    >
      <div className="app-container">
        <h1>Book Explorer App</h1>
        <BookSearch />
        <main className="split-layout">
          <BookList />
          <FavoriteBooks />
        </main>
      </div>
    </BookContext.Provider>
  );
}

export default App;
