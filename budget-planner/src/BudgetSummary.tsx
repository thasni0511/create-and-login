import { useContext, useMemo } from "react";
import BudgetContext from "./BudgetContext";

function BudgetSummary() {
  const { expenses, setExpenses } = useContext(BudgetContext);

  const total = useMemo(() => {
    return expenses.reduce((acc, expense) => acc + expense.amount, 0);
  }, [expenses]);

  const removeExpense = (index: number) => {
    const updated = expenses.filter((_, i) => i !== index);
    setExpenses(updated);
  };

  return (
    <div className="card">
      <h2>Summary</h2>
      {expenses.length === 0 ? (
        <p className="muted">No expenses added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((item, index) => (
              <tr key={index}>
                <td>{item.category}</td>
                <td>₹{item.amount.toFixed(2)}</td>
                <td>
                  <button onClick={() => removeExpense(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {expenses.length > 0 && (
        <>
          <hr />
          <p>Total Spent: ₹{total.toFixed(2)}</p>
        </>
      )}
    </div>
  );
}

export default BudgetSummary;
