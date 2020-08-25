import React from 'react';
import TodoItem from "./TodoItem";

interface ITodoList {
    todos:Array<ITodo>
}

const TodoList:React.FC<ITodoList> = ({todos}) => {
    return (
        <div>
            {
                todos.map(todo => (
                    <TodoItem todo={todo}/>
                ))
            }
        </div>
    );
};

export default TodoList;
