import { useState } from 'react'
import NewTodoForm from "./Components/NewFormTodo";
import Todos from "./Components/todos";
import "./styles/index.css";

function App() {
  
  return (
    <div className='todo-page'>
        <div className='container__main'>
          <Todos />
          <NewTodoForm />
          <img src="" alt="" />
        </div>
    </div>
  )
}

export default App
