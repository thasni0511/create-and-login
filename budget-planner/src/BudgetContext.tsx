import { createContext } from "react";

export interface Expense {
  category: string;
  amount: number;
}

export interface BudgetContextType {
  expenses: Expense[];
  setExpenses: (newItems: Expense[]) => void;
}

const BudgetContext = createContext<BudgetContextType>({
  expenses: [],
  setExpenses: () => {},
});

export default BudgetContext;
