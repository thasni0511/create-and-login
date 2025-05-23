import { useContext, useState } from "react";
import ReceipeContext from "./ReceipeContext";
import nutritionData from "./nutritionData";

function ItemList() {
  const { items, setItems } = useContext(ReceipeContext);
  const [name, setName] = useState<string>("");
  const [grams, setGrams] = useState<number>(NaN);

  const addItem = () => {
    if (!name || grams <=0) return;
    setItems([...items, { name, grams }]);
    setName("");
    setGrams(NaN);//You’re still passing a number, but a special one that means “empty” or “invalid.”
  };

  return (
    <div className="card">
      <h2>Add Ingredient</h2>
      <select value={name} onChange={(e) => setName(e.target.value)}>
        <option value="">Select Ingredient</option>
        {Object.keys(nutritionData).map((key) => ( //This returns an array of all the keys (i.e., ingredient names):
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Grams"
        value={isNaN(grams) ? "" : grams}    
        onChange={(e) => setGrams(Number(e.target.value))}
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default ItemList;
