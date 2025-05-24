import { useState } from "react";
import BudgetContext, { Expense } from "./BudgetContext";
import ExpenseList from "./ExpenseList";
import BudgetSummary from "./BudgetSummary";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  return (
    <BudgetContext.Provider value={{ expenses, setExpenses }}>
      <div className="app-container">
        <header>
          <h1>Budget Planner</h1>
        </header>

        <main className="split-layout">
          <div className="left-panel">
            <ExpenseList />
          </div>
          <div className="right-panel">
            <BudgetSummary />
          </div>
        </main>

        <footer>
          <p>Budget Planner </p>
        </footer>
      </div>
    </BudgetContext.Provider>
  );
}

export default App;
