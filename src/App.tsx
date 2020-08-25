import React, {useState} from 'react';
import TodoList from "./Components/TodoList";


const App: React.FC = () => {

    const [todos, setTodo] = useState<ITodo[]>([
        {
            id: 1,
            task: "hello world 1",
            completed: true
        },
        {
            id: 2,
            task: "hello world 2",
            completed: true
        },
        {
            id: 4,
            task: "hello world 3",
            completed: false
        }
    ])

    return (
        <div>
            <p>Hello world</p>
            <TodoList todos={todos}/>
        </div>
    );
};

export default App;
