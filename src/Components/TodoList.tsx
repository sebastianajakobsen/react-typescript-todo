import React from 'react';
import TodoItem from "./TodoItem";

interface TodoItem {
    id:number,
    text:string,
    completed:boolean
}

interface TodoListProps {
    todos:TodoItem[]
}

const TodoList = ({todos}:TodoListProps) => {
    return (
        <div>
            {
                todos.map(todo => (
                    <TodoItem todo={todo}/>
                ))
            }
        </div>
    );
}

export default TodoList;