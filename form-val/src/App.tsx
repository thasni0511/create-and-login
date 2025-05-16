//Root of the app (Parent)
import { useState } from "react";
import CardAppContext ,{ flashcard } from "./UserContext";
import CardView from "./cards";
import NavigationButtons from "./NavigationButtons";
function App() {

  const cardData: flashcard[] = [
    { question: "What is React?", answer: "A JavaScript library" },
    { question: "What is TypeScript?", answer: "A typed suprset of JavaScript" },
    { question: "What is useContext?", answer: "A hook to share state globally across components" },
    { question: "What is a component in React?", answer: "Reusable pieces of UI in React apps" },
  { question: "What is JSX?", answer: "A syntax extension that looks like HTML in React" },
  { question: "What is a hook?", answer: "A special function to use React features like state" },
  { question: "What does useState do?", answer: "Allows components to have a state and update state" },
  { question: "What does useEffect do?", answer: "Allows side effects like fetching data or subscriptions" },
  { question: "What is the virtual DOM?", answer: "A lightweight copy of the real DOM for efficient updates" },
  { question: "What is prop drilling?", answer: "Passing props through multiple intermediate components like parent to child to grandchild" },
  { question: "What is conditional rendering?", answer: "Rendering components or elements based on conditions" }

];


  const[currentIndex,setCurrentIndex]=useState(0);

  return (
    <CardAppContext.Provider value={{ flashcards: cardData, currentIndex, setCurrentIndex }}>
      <CardView />
      <NavigationButtons />
    </CardAppContext.Provider>
  );
}

export default App;