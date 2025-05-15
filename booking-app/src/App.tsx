import  BookingProvider  from "./context/BookingContext";
import DatePicker from "./components/DatePicker";
import TimeSlotPicker from "./components/TimeSlotPicker";
import BookingSummary from "./components/BookingSummary";
import "./App.css";

const App = () => {
  return (
    <BookingProvider>
      <div className="app-container">
        <div className="booking-card">
          <h1 className="title">Book Your Appointment</h1>
          <DatePicker />
          <TimeSlotPicker />
          <BookingSummary />
        </div>
      </div>
    </BookingProvider>
  );
};

export default App;
