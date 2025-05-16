// cards.tsx
import { useContext, useState } from "react";
import CardAppContext from "./UserContext";
import "./App.css";

function CardView() {
  const { flashcards, currentIndex } = useContext(CardAppContext);
  const [flipped, setFlipped] = useState(false);

  const card = flashcards[currentIndex]; 

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="card-container">
      <div
        className={`card ${flipped ? "flipped" : ""}`}
        onClick={handleFlip}
      >
        <div className="card-inner">
          <div className="card-front">
            <h2>Q: {card.question}</h2>
          </div>
          <div className="card-back">
            <p>Ans: {card.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardView;
