import { useState } from "react";
import ReceipeContext, { Item } from "./ReceipeContext";
import ReceipeSummary from "./ReceipeSummary";
import ItemList from "./ItemList";
import "./App.css";

function App() {
  const [items, setItems] = useState<Item[]>([]);


  return (
    <ReceipeContext.Provider value={{ items, setItems }}>
      <div className="app-container">
        <header>
          <h1>Receipe Nutrition Calculator</h1>

        </header>

<main className="split-layout">
  <div className="left-panel">
    <ItemList />
  </div>
  <div className="right-panel">
    <ReceipeSummary />
  </div>
</main>

        <footer>
          <p>Receipe Nutrition Calculator</p>
        </footer>
      </div>
    </ReceipeContext.Provider>
  );
}

export default App;
