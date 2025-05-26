import { createContext } from "react";

export interface GroceryItem {
  name: string;
  quantity: number;
  category?: string;
}

 interface GroceryContextType {
  items: GroceryItem[];
  setItems: (newItems: GroceryItem[]) => void;
}

const GroceryContext = createContext<GroceryContextType>({
  items: [],
  setItems: () => {},
});

export default GroceryContext;
