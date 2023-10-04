import React, { useState } from 'react';
import TaskList from './TaskList';
import './style/Task.css';
import { useTranslation } from "react-i18next";

const ToDoList = () => {

  const { t } = useTranslation();

  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState('');

  const addTask = () => {
    if (inputText.trim() !== '') {
      setTasks([
        ...tasks,
        {
          id: Math.random(),
          text: inputText,
        },
      ]);
      setInputText('');
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className='todolist'>
      <h1>Todo List</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={addTask}>{t('add')}</button>
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default ToDoList;
