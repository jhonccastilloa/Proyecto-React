import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function App() {

  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto">
      <TaskForm  />
      <TaskList  />

      </div>
    </main>
  );
}

export default App;
