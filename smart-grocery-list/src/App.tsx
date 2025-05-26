import { useState } from "react";
import GroceryContext, { GroceryItem } from "./GroceryContext";
import GroceryList from "./GroceryList";
import GrocerySummary from "./GrocerySummary";
import "./App.css";

function App() {
  const [items, setItems] = useState<GroceryItem[]>([]);

  return (
    <GroceryContext.Provider value={{ items, setItems }}>
      <div className="app-container">
        <header>
          <h1>Smart Grocery List</h1>
        </header>

        <main className="split-layout">
          <GroceryList />
          <GrocerySummary />
        </main>

        <footer> Smart Grocery List</footer>
      </div>
    </GroceryContext.Provider>
  );
}

export default App;
