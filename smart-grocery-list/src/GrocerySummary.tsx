import { useContext, useMemo } from "react";
import GroceryContext, { GroceryItem } from "./GroceryContext";
// import GroceryContext from "./GroceryContext";
import { motion } from "framer-motion";

const PRICE_LIST: Record<string, number> = { 
  Milk: 25, 
  Bread: 30,
  Eggs: 6,
  Apple: 10,
  Banana: 5,
  Rice: 60,
  Sugar: 45,
  Salt: 20,
  Tomato: 8,
  Potato: 10,
};

function GrocerySummary() {
  const { items, setItems } = useContext(GroceryContext);

  const totalCost = useMemo(() => {
    return items.reduce((sum, item) => {
      const unitPrice = PRICE_LIST[item.name] || 0;
      return sum + unitPrice * item.quantity;
    }, 0);
  }, [items]);

  const removeItem = (index: number) => {
    const updated = items.filter((item, i) => i !== index);
    setItems(updated);
  };

const convertToCSV = (): string => { 
  if (items.length === 0) return "";

  const header : string[] = ["Name", "Quantity", "Category", "Unit Price", "Total Price"]; 
  const rows : string[] = items.map(({ name, quantity, category }: GroceryItem): string => { 
    const unitPrice : number= PRICE_LIST[name] || 0;
    const totalPrice : number = unitPrice * quantity;
    return [name, quantity.toString(), category || "-", unitPrice.toString(), totalPrice.toString()].join(",");
  });

  return [header.join(","), ...rows].join("\n");
};

const exportCSV = (): void => {
    const csvData : string = convertToCSV();
    if (!csvData) return;

    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" }); 
 
    const url: string = URL.createObjectURL(blob); //Converts the blob into a temporary object URL
    const link: HTMLAnchorElement = document.createElement("a");//Creates a new <a> (anchor) element — like <a href="..." download="...">Download</a>.We’ll trigger this element to simulate a file download.
    link.href = url; //Assigns the temporary blob URL as the href of the anchor.
    link.setAttribute("download", "grocery-list.csv");//This tells the browser:When clicked, download this file, and name it grocery-list.csv
    document.body.appendChild(link); 
    link.click();//Programmatically clicks the anchor.

    document.body.removeChild(link);//Removes the anchor tag from the document after clicking.
    URL.revokeObjectURL(url);//Frees up memory by deleting the blob URL we created.
  };

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <h2>Grocery List</h2>
      {items.length === 0 ? (
        <p>No items yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              const unitPrice = PRICE_LIST[item.name] || 0;
              return (
                <motion.tr
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>₹{(unitPrice * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      onClick={() => removeItem(index)}
                      style={{
                        background: "none",
                        color: "#e53e3e",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "0.9rem",
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      )}
      {items.length > 0 && (
        <>
          <hr />
          <p><strong>Total Cost:</strong> ₹{totalCost.toFixed(2)}</p>
          <p><button onClick={exportCSV} >Export</button></p>
        </>
      )}
    </motion.div>
  );
}

export default GrocerySummary;
