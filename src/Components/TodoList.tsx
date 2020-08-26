import React from 'react';
import TodoItem from "./TodoItem";

interface TodoList {
    todos:Array<Todo>,
    toggleTodo:(id: number) => void,
    removeTodo:(id: number) => void;
}


const TodoList:React.FC<TodoList> = ({todos, toggleTodo, removeTodo}) => {
    return (
        <div>
            {
                todos.map(todo => (
                    <TodoItem removeTodo={removeTodo} toggleTodo={toggleTodo} key={todo.id} todo={todo}/>
                ))
            }
        </div>
    );
};

export default TodoList;