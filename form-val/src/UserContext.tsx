//Context (global data provider)


import { createContext } from "react";

export type flashcard={
    question:string;
    answer:string;
};

type CardAppContextType = {
  flashcards: flashcard[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
};


const CardAppContext=createContext<CardAppContextType>({
  flashcards: [],
  currentIndex: 0,
  setCurrentIndex: () => {},
});


export default CardAppContext;