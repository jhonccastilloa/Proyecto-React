import {useState,useEffect} from 'react';
import {task as data} from './task'

function TaskList() {
const [task, setTask] = useState([])
useEffect(()=>{
    setTask(data)
},[]

)
  return (
    <div>{console.log(task)}{
        task.map((task,i)=>(
            <div key={i}>
                <h1>{task.title}</h1>
                <p>{task.description}</p>
            </div>
        ))
        
        }
        </div>
  )
}

export default TaskList