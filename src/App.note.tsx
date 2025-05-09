import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState<string>(''); // State to manage input field
  const [tasks, setTasks] = useState<string[]>([]); // State to manage the list of tasks

  // useEffect to load tasks from localStorage when the page loads
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks)); // Parse and set tasks if they exist in localStorage
    }
  }, []); // Empty dependency array means this effect runs only once (on mount)

  // useEffect to save tasks to localStorage whenever the tasks state changes
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks)); // Save tasks to localStorage
    }
  }, [tasks]); // This effect runs every time `tasks` changes

  const handleAddTask = (): void => {
    if (inputValue.trim() !== '') {
      setTasks([inputValue, ...tasks]); // Add the new task to the tasks array
      setInputValue(''); // Clear the input field after adding the task
    }
  };

  const handleDeleteTask = (index: number): void => {
    const updatedTasks = tasks.filter((_, i) => i !== index); // Remove the task at the specified index
    setTasks(updatedTasks); // Update the state with the new list of tasks
  };

  return (
    <div className="container">
      <h1 className="title">To-Do List</h1>

      <div className="todo-list">
        {tasks.map((task, index) => (
          <div key={index} className="todo-card">
            📝 {task}
            {/* Delete X button */}
            <button className="delete-btn" onClick={() => handleDeleteTask(index)}>
              ✖
            </button>
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Add your task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="tick-button" onClick={handleAddTask}>
          ✅
        </button>
      </div>
    </div>
  );
}

export default App;
