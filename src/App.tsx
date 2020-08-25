import React, {useState} from 'react';
import TodoList from "./Components/TodoList";

const App = () => {
    const [todos, setTodos] = useState<Todo[]>([
        {
            id:1,
            text:"Walk the dog",
            completed:false
        },
        {
            id:2,
            text:"Do the dishes",
            completed:false
        },
        {
            id:3,
            text:"Relax",
            completed:true
        }
    ])

    const toggleTodo = (id:number) => {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                return {
                    ...todo,
                    completed:!todo.completed
                }
            }
            return todo;
        }))
    }

    return (
        <div>
           <TodoList toggleTodo={toggleTodo} todos={todos} />
        </div>
    );
};

export default App;
