import React, {useState} from 'react';
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";

const App = () => {

    const [todos, setTodos] = useState<Todo[]>([
        {
            id: 1,
            text: "Walk the dog",
            completed: false
        },
        {
            id: 2,
            text: "Do the dishes",
            completed: false
        },
        {
            id: 3,
            text: "Learn TypeScript",
            completed: true
        },
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

    const removeTodo = (id:number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const addTodo = (newTodo:string ) => {
        setTodos([...todos, {text:newTodo, completed:false, id:Math.floor(Math.random() * 10000000)}]);
    }

    return (
        <div className="relative overflow-hidden mb-8">
            <div
                className="rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 px-3 py-10 flex justify-center">
                <div className="w-full max-w-xs">
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h1 className="text-2xl">React todo app</h1>
            <TodoForm addTodo={addTodo}/>
            <TodoList removeTodo={removeTodo} toggleTodo={toggleTodo} todos={todos} />
                    </div>
                </div>

            </div>


        </div>
    );
};

export default App;
