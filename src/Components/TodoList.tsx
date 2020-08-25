import React from 'react';
import TodoItem from "./TodoItem";

interface TodoList {
    todos:Array<Todo>,
    toggleTodo:(id: number) => void;
}

const TodoList:React.FC<TodoList> = ({todos, toggleTodo}) => {
    return (
        <div>
            {
                todos.map(todo => (
                    <TodoItem toggleTodo={toggleTodo} key={todo.id} todo={todo} />
                ))
            }
        </div>
    );
};

export default TodoList;
