// 1. Import dependencies
import { useState } from 'react';
import './App.css';

// 2. Define the App component
function App() {

  // 3. State setup (runs once when component mounts)
  const [showInput, setShowInput] = useState(false);   // To show/hide the input field
  const [inputValue, setInputValue] = useState('');    // To track the text input
  const [tasks, setTasks] = useState<string[]>([]);    // To store the list of tasks

  // 4. Function to handle adding a new task (runs on ✅ click)
  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([inputValue, ...tasks]);  // Add new task to top of list
      setInputValue('');                 // Clear input field
    }
  };

  // 5. Return the UI
  return (
    <div className="container">
      
      {/* 6. Heading - visible immediately */}
      <h1 className="title">To-Do List</h1>

      {/* 7. Display all tasks */}
      <div className="todo-list">
        {tasks.map((task, index) => (
          <div key={index} className="todo-card">📝 {task}</div>
        ))}
      </div>

      {/* 8. Input area - only shown when 'Add Task' is clicked */}
      {showInput && (
        <div className="input-area">
          <input 
            type="text" 
            placeholder="Type your task here" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} 
          />
          <button className="tick-button" onClick={handleAddTask}>✅</button>
        </div>
      )}

      {/* 9. Button to show input area */}
      <button className="add-button" onClick={() => setShowInput(true)}>＋ Add Task</button>

    </div>
  );
}

// 10. Export the component so it can be used in other files
export default App;
