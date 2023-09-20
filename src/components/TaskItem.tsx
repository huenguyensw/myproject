import React, {useContext, useState} from 'react'
import { Task , TaskContext} from './context/TaskProvider';
import styleForm from '../styles/style.module.css'


const TaskItem: React.FC<{item:Task }> = ({item}) => {
    const [taskName, setTaskName] = useState<string>(item.name);
    const {setTaskList} = useContext(TaskContext);

    const handleChange =  (event: React.ChangeEvent<HTMLInputElement>) =>{
        setTaskName(event.target.value);
    }
    const handleDeleteTask = (index:number) =>{
      setTaskList((prevTaskList: Task[]) => {
        return prevTaskList.filter((item)=> item.id !== index);
      });
    }

  return (
    <li className={styleForm.taskSection}>
      <input 
       className={styleForm.inputField}
        type='text' 
        value={taskName} 
        onChange={handleChange}
        disabled
      ></input>
      <button onClick={()=>handleDeleteTask(item.id)}>Delete</button>
    </li>
  )
}

export default TaskItem
