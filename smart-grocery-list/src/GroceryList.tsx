import { useContext, useRef, useState } from "react";
import GroceryContext from "./GroceryContext";
import { motion } from "framer-motion";

function GroceryList() {
  const { items, setItems } = useContext(GroceryContext);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState<number>(1);
  const [category, setCategory] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const addItem = () => {
    if (!name || quantity <= 0) return;
    setItems([...items, { name, quantity, category }]);
    setName("");
    setQuantity(1);
    setCategory("");
    inputRef.current?.focus();
  };

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Add Item</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <input
        type="text"
        placeholder="Category (optional)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
    </motion.div>
  );
}

export default GroceryList;
