import { createContext } from "react";

 interface MovieContextType {
  favorites: string[];
  setFavorites: (newfavorites: string[]) => void;
}

const MovieContext = createContext<MovieContextType>({
  favorites: [],
  setFavorites: () => {},
});

export default MovieContext;
