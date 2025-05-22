import { useContext, useMemo } from "react";
import InvoiceContext from "./InvoiceContext";

function InvoiceSummary() {
  const { items, setItems } = useContext(InvoiceContext);

  const { subtotal, totalTax, total } = useMemo(() => {
    const subtotal = items.reduce((acc, item) => acc + item.quantity * item.price, 0);
    const totalTax = items.reduce(
      (acc, item) => acc + item.quantity * item.price * (item.taxRate || 0),
      0
    );
    const total = subtotal + totalTax;

    return { subtotal, totalTax, total };
  }, [items]);

  const removeItem = (index: number) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  return (
    <div className="card">
      <h2>Invoice Summary</h2>

      {items.length === 0 ? (
        <p className="muted">No items added yet.</p>
      ) : (
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Tax</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              const itemTotal = item.quantity * item.price;
              const itemTax = itemTotal * (item.taxRate || 0);
              return (
                <tr key={index}>
                  <td>{item.quantity} × {item.name}</td>
                  <td>₹{item.price.toFixed(2)}</td>
                  <td>₹{itemTax.toFixed(2)}</td>
                  <td>₹{(itemTotal + itemTax).toFixed(2)}</td>
                  <td>
                    <button className="remove-btn" onClick={() => removeItem(index)}>
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      {items.length > 0 && (
        <>
          <hr />
          <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
          <p>Tax: ₹{totalTax.toFixed(2)}</p>
          <h3 className="total-amount">Total: ₹{total.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}

export default InvoiceSummary;
