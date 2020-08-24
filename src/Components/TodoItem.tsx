import React from 'react';

interface TodoProps {
    todo: {
        id:number,
        text:string,
        completed:boolean
    }
}

function TodoItem({todo}:TodoProps) {
    return (
        <div>
            {todo.text}
        </div>
    );
}

export default TodoItem;