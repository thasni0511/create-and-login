import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
//strict mode use --- Strict Mode is like a warning system that helps you find problems in your React code while you're building the app.
//
// checks your code and gives warnings in the console (developer tools).check whole app for bugs, bad practices, or things that might break in the future.

//functional components n class components diff:
//props children with explanation code -- lets you create reusable wrapper components Layouts,Cards,Sections that can hold any content inside them
//usestate,events (use maximum events)


//usestate,useref --- hooks (Important)
//render(refresh) --- only change the department of what is inside the render not the whole page
//
