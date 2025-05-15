import { useBooking } from "../context/BookingContext";

const timeSlots = ["10:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"];

const TimeSlotPicker = () => {
  const { selectedTime, setTime } = useBooking();

  return (
    <div className="form-group">
      <label className="label">Select Time Slot</label>
      <div className="time-slot-container">
        {timeSlots.map((slot) => (
          <button
            key={slot}
            className={`time-slot-button ${selectedTime === slot ? "selected" : ""}`}
            onClick={() => setTime(slot)}
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotPicker;
