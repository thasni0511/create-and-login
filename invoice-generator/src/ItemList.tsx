import { useContext, useState } from "react";
import InvoiceContext from "./InvoiceContext";

const catalog = [
  { name: "Pen", price: 120.5, taxRate: 0.2 },
  { name: "Notebook", price: 150.0, taxRate: 0.2 },
  { name: "Pencil Set", price: 100, taxRate: 0.01 },
  { name: "shoe", price: 800, taxRate: 0.5 },
  { name: "bag", price: 1000, taxRate: 0.4 },
];

function ItemList() {
  const { items, setItems } = useContext(InvoiceContext);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const addItem = () => {
    const selected = catalog.find((item) => item.name === name);
    if (!selected || !quantity) return;

    const newItem = {
      name: selected.name,
      quantity: Number(quantity),
      price: selected.price,
      taxRate: selected.taxRate,
    };

    setItems([...items, newItem]);
    setName("");
    setQuantity("");
  };

  return (
    <div className="card">
      <h2>Add Item</h2>

      <select value={name} onChange={(e) => setName(e.target.value)}>
        <option value="">Select Item</option>
        {catalog.map((item) => (
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>

      <input
        placeholder="Quantity"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default ItemList;
