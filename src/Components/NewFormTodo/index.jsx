import { useContext, useState } from "react";
import { TodosContext } from "../../Context/todos"
import { StyledInputTodo } from "./style";

function NewTodoForm() {
    const [task, setTask] = useState("");
    const { saveNewTodo } = useContext(TodosContext);

        function handleSaveNewTask(e) {
            e.preventDefault();

            saveNewTodo(task)
        }

    return (
        <StyledInputTodo onSubmit={handleSaveNewTask}>
            <input 
                type="text"
                placeholder="Exemplo: Estudar"
                value={task} 
                onChange={(event) => setTask(event.target.value)} 
            />

            <button type="submit">Criar nova tarefa</button>
        </StyledInputTodo>
    )
}

export default NewTodoForm;