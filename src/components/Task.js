import React from "react";

function Task({ task, index, handleTaskDelete, text, category }) {
  return (
    <div className="task" key={index}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => handleTaskDelete(index)}>
        X
      </button>
    </div>
  );
}

export default Task;
