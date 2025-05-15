import { useBooking } from "../context/BookingContext";

const DatePicker = () => {
  const { selectedDate, setDate } = useBooking();

  return (
    <div className="form-group">
      <label className="label">Select a Date</label>
      <input
        type="date"
        className="input"
        value={selectedDate}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
};

export default DatePicker;
