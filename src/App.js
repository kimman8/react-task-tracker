import "./App.css";
import Header from "./components/Header";
import React, { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Task from "./components/Task";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "cook spaghetti",
      day: "Feb 5th 3:30pm 2020",
      reminder: true,
    },
    {
      id: 2,
      text: "learn react",
      day: "Feb 6th 4:30pm 2020",
      reminder: false,
    },
    {
      id: 3,
      text: "go climbing",
      day: "Feb 7th 11:30pm 2020",
      reminder: true,
    },
  ]);

  const toggleTasks = (task) => {
    setShowAddTask(!showAddTask);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    // setTasks([...tasks, (id.reminder = !task.reminder)]);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    setTasks([...tasks, { id, ...task }]);
    console.log(task);
  };
  return (
    <div className="container">
      <Header title="Task Tracker" onAdd={toggleTasks} showCunt={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "nothing to show"
      )}
    </div>
  );
}

export default App;
