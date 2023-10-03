import { createContext } from "react";
import { useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      setTasks(data);
    }, []);
  
    function createTask(task) {
      setTasks([
        ...tasks,
        {
          id: tasks.length,
          tarea: task.title,
          descripcion: task.desc,
        },
      ]);
    }
  
    function deleteTask(taskid) {
      setTasks(tasks.filter(task => task.id !== taskid))
    }
  
  return (
    <>
      <TaskContext.Provider value={{
        tasks,
        createTask,
        deleteTask
      }}>{props.children}</TaskContext.Provider>
    </>
  );
}
