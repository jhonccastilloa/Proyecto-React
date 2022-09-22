import { createContext, useState, useEffect } from "react";
import { task as data } from "../task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [task, setTask] = useState([]);
  useEffect(() => {
    setTask(data);
  }, []);
  function createTask(tasks) {
    setTask([
      ...task,
      {
        title: tasks.title,
        id: task.length,
        description: tasks.description,
      },
    ]);
  }
  function deleteTask(idTask) {
    console.log(idTask);
    setTask(task.filter((task) => task.id !== idTask));
  }
  return (
    <TaskContext.Provider
      value={{
        task,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
