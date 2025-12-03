import React from "react";

function TaskList({ tasks, toggleTask, deleteTask }) {
  if (!tasks.length) {
    return <p>No tasks yet. Start by adding one above 👆</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={task.completed ? "completed" : ""}
        >
          <span onClick={() => toggleTask(task.id)}>{task.text}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteTask(task.id);
            }}
            aria-label="Delete task"
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
