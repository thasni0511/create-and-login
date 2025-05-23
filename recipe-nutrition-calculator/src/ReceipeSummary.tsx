import { useContext, useMemo } from "react";
import ReceipeContext from "./ReceipeContext";
import nutritionData from "./nutritionData";

function ReceipeSummary() {
  const { items, setItems } = useContext(ReceipeContext);

  const totals = useMemo(() => {
    return items.reduce(
      (acc, item) => {
        const data = nutritionData[item.name as keyof typeof nutritionData]; 
        //typeof -- This gets the type shape of the nutritionData object. like  rice: { calories: 130, protein: 2.7, fat: 0.3, carbs: 28 }
        //Take the string item.name, and treat it as one of the keys of the nutritionData object
        const factor = item.grams / 100; 
        //item.name is just string, but nutritionData only allows keys like "rice" | "dosa" | "idli".
        acc.calories += data.calories * factor;
        acc.protein += data.protein * factor;
        acc.fat += data.fat * factor;
        acc.carbs += data.carbs * factor;
        return acc;
      },
      { calories: 0, protein: 0, fat: 0, carbs: 0 }
    );
  }, [items]);

  const removeItem = (index: number) => {
    const updated = items.filter((item, i) => i !== index);
    setItems(updated);
  };

  return (
    <div className="card">
      <h2>Recipe Nutrition Summary</h2>
      {items.length === 0 ? (
        <p className="muted">No ingredients added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Ingredient</th>
              <th>Grams</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.grams}g</td>
                <td>
                  <button onClick={() => removeItem(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {items.length > 0 && (
        <>
          <hr />
          <p>Calories: {totals.calories.toFixed(2)}</p>
          <p>Protein: {totals.protein.toFixed(2)} g</p>
          <p>Fat: {totals.fat.toFixed(2)} g</p>
          <p>Carbs: {totals.carbs.toFixed(2)} g</p>
        </>
      )}
    </div>
  );
}

export default ReceipeSummary;
