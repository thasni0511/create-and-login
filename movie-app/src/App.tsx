import { useState } from "react";
import MovieContext from "./MovieContext";
import MovieList from "./MovieList";
import FavoritesList from "./FavoritesList";
import "./App.css";

function App() {
  const [favorites, setFavorites] = useState<string[]>(['d']);
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const toggleTheme = () => setDarkMode(!darkMode); 
  return (
    <MovieContext.Provider value={{ favorites, setFavorites }}>
      <div className={`app-container ${darkMode ? "dark" : "light"}`}>
        <header>
          <h1>🎬 Movie Favorites</h1>
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </header>

        <main className="content">
          <MovieList />
          <FavoritesList />
        </main>

        <footer>
          <p> Movie Fave App</p>
        </footer>
      </div>
    </MovieContext.Provider>
  );
}

export default App;
