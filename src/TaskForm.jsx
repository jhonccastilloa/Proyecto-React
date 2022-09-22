import React from 'react'

function TaskForm() {
  return (
    
        <form action="">
            <input type="text" placeholder='digite algo' 
            onChange={(e)=>(
                e.target.value
            )}/>
            <button>Guardar</button>
        </form>

    
  )
}

export default TaskForm