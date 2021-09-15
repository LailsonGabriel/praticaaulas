import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';
import './Task.css';
import { CgClose, CgInfo } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';

export default function Task({ task }) {
  const { handleTaskClick, removeTask } = useContext(MyContext);
  const history = useHistory();

  const handleDetails = () => {
    history.push(`/${task.title}`);
  };
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <div className="buttons-container">
        <button className="remove-task" onClick={() => removeTask(task.id)}>
          <CgClose />
        </button>
        <button className="task-details" onClick={handleDetails}>
          <CgInfo />
        </button>
      </div>
    </div>
  );
}
