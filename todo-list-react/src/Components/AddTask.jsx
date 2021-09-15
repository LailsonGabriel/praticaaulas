import React, { useContext, useState } from 'react';
import MyContext from '../Context/MyContext';
import './AddTask.css';
import Button from './Button';

function AddTask() {
  const [inputData, setInputData] = useState('');
  const { handleTaskAdd } = useContext(MyContext);

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleOnClickTask = () => {
    if (inputData === '') return alert('Tarefa Vazia!');
    handleTaskAdd(inputData);
    setInputData('');
  };

  return (
    <div className="add-task-container">
      <input
        className="add-task-input"
        value={inputData}
        type="text"
        onChange={handleInputChange}
      />
      <div className="add-task-button-container">
        <Button onClick={handleOnClickTask}>Adicionar</Button>
      </div>
    </div>
  );
}

export default AddTask;
