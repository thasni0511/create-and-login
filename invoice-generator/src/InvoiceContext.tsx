import { createContext } from "react";

export interface Item {
  name: string;
  quantity: number;
  price: number;
  taxRate: number; 
}

export interface InvoiceContextType {
  items: Item[];
  setItems: (newItems: Item[]) => void;
}

const InvoiceContext = createContext<InvoiceContextType>({
  items: [],
  setItems: () => {},
});

export default InvoiceContext;
