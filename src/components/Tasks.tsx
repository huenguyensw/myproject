import React, { useState, useContext } from 'react'
import { TaskContext } from './context/TaskProvider'
import TaskItem from './TaskItem';
import AddTask from './AddTask';
import styleForm from '../styles/style.module.css'
import styled from 'styled-components';


const Tasks = () => {
  const { taskList } = useContext(TaskContext);

  return (
    <div className={styleForm.TasksContainer}>
      <Title >Todo App</Title>
      <AddTask />
      <ul className={styleForm.list}>
        {taskList
          .slice() 
          .sort((a, b) => b.id - a.id) 
          .map((task) => (
            <TaskItem key={task.id} item={task} />
          ))}
      </ul>

    </div>
  )
}

export default Tasks

const Title = styled.div`
font-family: 'Pacifico';
text-align: center;
font-size: ${({ theme }) => theme.fontsSize.xlarge};
color: ${({ theme }) => theme.colors.secondary};`
