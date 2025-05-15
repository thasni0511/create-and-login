import { useEffect, useState } from "react";
import { useBooking } from "../context/BookingContext";

const BookingSummary = () => {
  const { selectedDate, selectedTime } = useBooking();
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setConfirmed(true);
    }, 1000);
  };

  useEffect(() => {
    if (confirmed) {
      const timer = setTimeout(() => setConfirmed(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [confirmed]);

  return (
    <div className="summary">
      <h3 className="summary-title">Summary</h3>
      <p><strong>Date:</strong> {selectedDate}</p>
      <p><strong>Time:</strong> {selectedTime}</p>
      {selectedDate && selectedTime && (
        <button className="confirm-button" onClick={handleConfirm} disabled={loading}>
          {loading ? <span className="spinner"></span> : "Confirm Appointment"}
        </button>
      )}
      {confirmed && <p className="confirmation-message fade-out">🎉 Your appointment is confirmed!</p>}
    </div>
  );
};

export default BookingSummary;
