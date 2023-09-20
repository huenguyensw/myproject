import React, { createContext, useState, ReactNode } from 'react'

export interface Task {
  id: number;
  name: string;
}

interface TaskContextType {
  taskList: Task[];
  keyValue: number;
  setTaskList: (tasks: Task[] | ((tasks: Task[]) => Task[])) => void;
  setKeyValue: (id: number) => void;
}
export const TaskContext = createContext<TaskContextType>({
  taskList: [],
  keyValue: 0,
  setTaskList: (_) => { },
  setKeyValue: () => { },
});

const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [keyValue, setKeyValue] = useState<number>(0);
  
  return (
    <TaskContext.Provider value={{
      taskList,
      setTaskList,
      setKeyValue,
      keyValue
    }}>
      {children}
    </TaskContext.Provider>

  )
}

export default TaskProvider
