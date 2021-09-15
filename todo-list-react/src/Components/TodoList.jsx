import React, { useState } from 'react';
import '../App.css';
import Tasks from './Tasks';
import MyContext from '../Context/MyContext';
import AddTask from './AddTask';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import { Route } from 'react-router';
import TaskDetails from './TaskDetails';

export default function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Python',
      completed: false,
    },
    {
      id: '2',
      title: 'Passear com os Cachorros',
      completed: true,
    },
  ]);

  const handleTaskAdd = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  const handleTaskClick = (Taskid) => {
    const newTaks = tasks.map((task) => {
      if (task.id === Taskid) return { ...task, completed: !task.completed };
      return task;
    });

    setTasks(newTaks);
  };

  const removeTask = (TaskId) => {
    const newTask = tasks.filter((task) => task.id !== TaskId);
    setTasks(newTask);
  };

  return (
    <>
      <div className="container">
        <MyContext.Provider
          value={{ tasks, handleTaskAdd, handleTaskClick, removeTask }}
        >
          <Header />
          <Route
            exact
            path="/"
            render={() => (
              <>
                <AddTask />
                <Tasks />
              </>
            )}
          />
          <Route exact path="/:details" component={TaskDetails} />
        </MyContext.Provider>
      </div>
    </>
  );
}
