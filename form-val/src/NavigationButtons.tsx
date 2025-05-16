// NavigationButtons.tsx
import { useContext } from "react";
import CardAppContext from "./UserContext";

function NavigationButtons() {
  const { flashcards, currentIndex, setCurrentIndex } = useContext(CardAppContext);

  const goPrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const goNext = () => {
    if (currentIndex < flashcards.length - 1) setCurrentIndex(currentIndex + 1);
  };

return (
  <div className="navigation-buttons" style={{ marginTop: "90px" }}>
    <button onClick={goPrev} disabled={currentIndex === 0}>Prev</button>
    <button onClick={goNext} disabled={currentIndex === flashcards.length - 1}>Next</button>
  </div>
);
}

export default NavigationButtons;
