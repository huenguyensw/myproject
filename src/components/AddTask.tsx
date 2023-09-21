import React, { useContext, useState } from 'react'
import { TaskContext } from './context/TaskProvider';
import styleForm from '../styles/style.module.css'

const AddTask = () => {
    const [newTask, setNewTask] = useState<string>('');
    const { taskList,
        setTaskList,
        keyValue,
        setKeyValue,
    }
    = useContext(TaskContext);
    
    const [errorMessage, setErrorMessage] = useState<string>('')

    const handleAddTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value);
        setErrorMessage('');
    }

    const handleAddingTask = () => {
        if (newTask.trim() === '') {
            setErrorMessage('Cannot create an empty task');
        } else {
            setTaskList([...taskList, { id: keyValue, name: newTask }]);
            setKeyValue(keyValue + 1);
            setErrorMessage('');
            setNewTask('');
        }
    }
    return (
        <div className={styleForm.addingContainer}>
            <div className={styleForm.taskSection}>
                <input
                    className={styleForm.inputField}
                    type='text'
                    placeholder='Add new task...'
                    value={newTask}
                    onChange={handleAddTask}
                />
                <button onClick={handleAddingTask}>Add</button>
            </div>
            <p className={styleForm.errorMsg}>{errorMessage}</p>
        </div>
    )
}

export default AddTask

