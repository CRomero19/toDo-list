import { useContext } from "react";
import { TodosContext } from "../../Context/todos";
import { StyledListTodos } from "./style";

function Todos() {
  const { todos, deleteTodo, completeTask } = useContext(TodosContext);

  return (
    <StyledListTodos>
      <h1>Lista de tarefas</h1>

        <ul>
            {
            !todos.length ? 
            (
            <p>Lista vazia</p>
            ) 
            : 
            (
            todos.map((todo) => (
                <li key={todo.id}>

                <input type="checkbox" onClick={() => completeTask(todo.id)} />

                <span style={{textDecoration: todo.completed && "line-through"}}>
                    {todo.task}
                </span>

                <button onClick={() => deleteTodo(todo.id)} type="button">
                    excluir
                </button>
                
                </li>
            ))
            )
            }
        </ul>
        
    </StyledListTodos>
  );
}

export default Todos;
