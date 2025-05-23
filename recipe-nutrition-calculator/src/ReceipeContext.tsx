import { createContext } from "react";

export interface Item {
  name: string;
  grams: number;
}

export interface ContextType {
  items: Item[];
  setItems: (newItems: Item[]) => void;
}

const ReceipeContext = createContext<ContextType>({
  items: [],
  setItems: () => {},
});

export default ReceipeContext;
