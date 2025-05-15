import { createContext, useContext, useState, ReactNode } from "react";

type BookingType = {
  selectedDate: string;
  selectedTime: string;
  setDate: (date: string) => void;
  setTime: (time: string) => void;
};

const BookingContext = createContext<BookingType>({
  selectedDate: "",
  selectedTime: "",
  setDate: () => {},
  setTime: () => {},
});

const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <BookingContext.Provider
      value={{
        selectedDate,
        selectedTime,
        setDate: setSelectedDate,
        setTime: setSelectedTime,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

const useBooking = () => useContext(BookingContext);

export { useBooking };
export default BookingProvider;
