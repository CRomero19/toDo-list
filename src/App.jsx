import { useState } from 'react'
import NewTodoForm from "./Components/NewFormTodo";
import Todos from "./Components/todos";

function App() {
  
  return (
    <div>
        <Todos />
        <NewTodoForm />
    </div>
  )
}

export default App
