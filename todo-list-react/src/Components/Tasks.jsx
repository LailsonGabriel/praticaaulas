import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';
import Task from './Task';

export default function Tasks() {
  const { tasks } = useContext(MyContext);
  return (
    <>
      {tasks.map((task) => (
        <Task task={task} />
      ))}
    </>
  );
}
