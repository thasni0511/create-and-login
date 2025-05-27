import { useContext } from "react";
import BookContext from "./BookContext";

function BookSearch() {
  const { searchQuery, setSearchQuery } = useContext(BookContext);

  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search books..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

export default BookSearch;
