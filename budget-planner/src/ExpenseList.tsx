import { useContext, useState, useRef, useEffect } from "react";
import BudgetContext from "./BudgetContext";

function ExpenseList() {
  const { expenses, setExpenses } = useContext(BudgetContext);
  const [category, setCategory] = useState<string>("");
  const [amount, setAmount] = useState<number>(NaN);
  const inputRef = useRef<HTMLInputElement>(null);

  const addExpense = () => {
    if (!category || amount <= 0) return;
    setExpenses([...expenses, { category, amount }]);
    setCategory("");
    setAmount(NaN);
    inputRef.current?.focus(); 
  };

  useEffect(() => {
    console.log("Expense list updated:", expenses);
  }, [expenses]);

  return (
    <div className="card">
      <h2>Add Expense</h2>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        ref={inputRef}
      />
      <input
        type="number"
        placeholder="Amount"
        value={isNaN(amount) ? "" : amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={addExpense}>Add</button>
    </div>
  );
}

export default ExpenseList;
