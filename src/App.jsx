import React, { useState } from 'react'; // Importing React and useState hook
import './App.css'; // Importing the CSS file for styling

const App = () => {

  const [tasks, setTasks] = useState([]); // State to hold the list of tasks
  const [task, setTask] = useState(''); // State to hold the current input value for the new task

  // Function to handle changes in the input field
  
  const handleInputChange = (e) => {
    setTask(e.target.value); // Update the task state with the current input value
  };

  // Function to add a new task to the list

  const handleAddTask = () => {
    // Check if the input is not just whitespace
    if (task.trim()) {
      // Create a new task object and add it to the tasks array
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]); // spread operator splits array into elements, and in this case adds the new element task 3
      setTask(''); // Clear the input field after adding the task
    }
  };

  // Function to toggle the completion status of a task

  const handleToggleTask = (id) => {
    // Map through the tasks and toggle the completed status of the selected task
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  // Function to delete a task from the list

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id)); // Filter out the task with the specified id from the tasks array
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      
      {/*Input field for adding new tasks*/}

      <input 
        type="text" 
        value={task} 
        onChange={handleInputChange} 
        placeholder="Add a new task" 
      />

      {/* Button to add the task */}

      <button onClick={handleAddTask}>Add Task</button>

      {/* List of tasks */}

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {/* Clicking on the task toggles its completion status */}
            <span onClick={() => handleToggleTask(t.id) } className={`task-item ${t.completed ? 'completed' : ''}`} >{t.text}</span>
            {/* Button to delete the task */}
            <button onClick={() => handleDeleteTask(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App; 