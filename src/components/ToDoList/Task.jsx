import React from 'react';
import './style/Task.css';
import { useTranslation } from "react-i18next";

const Task = ({ task, onDelete }) => {

  const { t } = useTranslation();

  return (
    <div>
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>{t('delete')}</button>
    </div>
  );
};

export default Task;
