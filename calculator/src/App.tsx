import React, { useState, useReducer, createContext, useContext, useMemo, JSX } from 'react';
import './App.css';



type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

interface State {
  current: string;
  previous: string;
  operator: string | null;
}

type Action =
  | { type: 'ADD_NUMBER'; payload: string }
  | { type: 'SET_OPERATOR'; payload: string }
  | { type: 'CALCULATE' }
  | { type: 'RESET' };



const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeContext.Provider');
  return context;
};


const initialState: State = { current: '', previous: '', operator: null };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_NUMBER':
      return { ...state, current: state.current + action.payload };
    case 'SET_OPERATOR':
      return { ...state, operator: action.payload, previous: state.current, current: '' };
    case 'CALCULATE':
      const prev = parseFloat(state.previous);
      const curr = parseFloat(state.current);
      let result = 0;
      if (state.operator === '+') result = prev + curr;
      if (state.operator === '-') result = prev - curr;
      if (state.operator === '*') result = prev * curr;
      if (state.operator === '/') result = prev / curr;
      return { current: result.toString(), previous: '', operator: null };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}



export default function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [theme, setTheme] = useState<Theme>('light');

  const formatted = useMemo(() => state.current || '0', [state.current]);

  const toggleTheme = (): void => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  const handleButtonClick = (btn: string) => {
    if (!isNaN(Number(btn))) dispatch({ type: 'ADD_NUMBER', payload: btn });
    else if (btn === 'C') dispatch({ type: 'RESET' });
    else if (btn === '=') dispatch({ type: 'CALCULATE' });
    else dispatch({ type: 'SET_OPERATOR', payload: btn });
  };

  const buttons = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', 'C', '=', '/'];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        <div className="calculator">
                    <button className="theme-toggle" onClick={toggleTheme}>Toggle ON/OFF</button>

          <div className="display">{formatted}</div>
          <div className="buttons">
            {buttons.map((btn) => (
              <button key={btn} onClick={() => handleButtonClick(btn)}>
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
