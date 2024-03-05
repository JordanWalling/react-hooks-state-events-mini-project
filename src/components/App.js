import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const onTaskFormSubmit = (formData) => {
    const newTask = {
      text: formData.text,
      category: formData.category,
    };
    setTasks((prev) => {
      const updatedTasks = [...prev, newTask];
      console.log("Updated tasks: ", updatedTasks);
      return updatedTasks;
    });
  };
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        handleCategoryChange={handleCategoryChange}
      />
      <NewTaskForm
        onTaskFormSubmit={onTaskFormSubmit}
        categories={CATEGORIES}
      />
      <TaskList tasks={tasks} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
