import React from 'react';
import './style/Task.css';

const Task = ({ task, onDelete }) => {
  return (
    <div>
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Supprimer</button>
    </div>
  );
};

export default Task;
