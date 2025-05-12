import { useState,useRef,useEffect } from 'react';
import './App.css';

function App() {

    const [inputValue, setInputValue] = useState<string>('can\'t');

    const[tasks,setTasks]=useState<string[]>([]);
    
    const inputRef = useRef<HTMLInputElement>(null);

    
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks)); 
    }
  }, []); 

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks)); 
    }
  }, [tasks]); 

    const setInputRef = (element: HTMLInputElement | null) => {
     
      if(element)
        {
        inputRef.current = element; 
        element.focus(); 
      }
    };

    const handleAddTask = ():void => {
      if (inputValue.trim() !== '') {
        setTasks([inputValue, ...tasks]); 
        setInputValue(''); 
        inputRef.current?.focus();
      }
    };
    const handleDeleteTask = (index: number): void => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };
    return (

    <div className="container">
      <h1 className="title">To-Do List</h1>

      <div className="todo-list">
      {tasks.map((task, index) => (
    <div key={index} className="todo-card" >📝 {task}
     <button
      className="delete-btn"
      onClick={() => handleDeleteTask(index)}
      >
      ✖ </button>
    </div>
  ))}
      </div>


        
  <div className="input-area">
    <input type="text" placeholder="Add your task" value={inputValue}
  onChange={(e) => setInputValue(e.target.value)} 
  ref={setInputRef}/>
    <button className="tick-button" onClick={handleAddTask}>✅</button>
  </div>

    </div>
  );
}

export default App;


