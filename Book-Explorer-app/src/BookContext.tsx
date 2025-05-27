import { createContext } from "react";
import { Book } from "./books";

interface BookContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  favorites: Book[];
  addFavorite: (book: Book) => void;
  removeFavorite: (id: string) => void;
}

const BookContext = createContext<BookContextType>({
  searchQuery: "",
  setSearchQuery: () => {},
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export default BookContext;
