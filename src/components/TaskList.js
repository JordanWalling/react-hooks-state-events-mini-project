import React, { useEffect, useState } from "react";
import Task from "./Task";

function TaskList({ tasks, selectedCategory }) {
  const [allTasks, setAllTasks] = useState(tasks);

  function handleTaskDelete(index) {
    const newArray = allTasks.filter((_, i) => index !== i);
    setAllTasks(newArray);
  }

  useEffect(() => {
    setAllTasks(tasks);
  }, [tasks]);

  const filteredTasks =
    selectedCategory === "All"
      ? allTasks
      : allTasks.filter((task) => task.category === selectedCategory);
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {filteredTasks.map((task, index) => (
        <Task
          task={task}
          index={index}
          key={index}
          handleTaskDelete={handleTaskDelete}
          text={task.text}
          category={task.category}
        />
      ))}
    </div>
  );
}

export default TaskList;
