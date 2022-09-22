import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "./context/TaskContext";
function TaskList({}) {
  const { task } = useContext(TaskContext);
  if (task.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No se encontraron elementos</h1>;
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {console.log(task)}
      {task.map((task, i) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
