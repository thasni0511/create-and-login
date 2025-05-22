import { useState } from "react";
import InvoiceContext, { Item } from "./InvoiceContext";
import ItemList from "./ItemList";
import InvoiceSummary from "./InvoiceSummary";
import "./App.css";

function App() {
  const [items, setItems] = useState<Item[]>([]);


  return (
    <InvoiceContext.Provider value={{ items, setItems }}>
      <div className="app-container">
        <header>
          <h1>🧾 Invoice Generator</h1>

        </header>

<main className="split-layout">
  <div className="left-panel">
    <ItemList />
  </div>
  <div className="right-panel">
    <InvoiceSummary />
  </div>
</main>

        <footer>
          <p>Invoice Generator</p>
        </footer>
      </div>
    </InvoiceContext.Provider>
  );
}

export default App;
