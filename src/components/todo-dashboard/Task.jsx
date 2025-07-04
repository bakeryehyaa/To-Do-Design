import React from 'react';

const Task = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>✖</button>
    </div>
  );
};

export default Task;
