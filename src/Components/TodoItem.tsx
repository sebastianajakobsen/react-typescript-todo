import React from 'react';

interface TodoProps {
    todo: {
        id:number,
        text:string,
        completed:boolean
    }
}

const TodoItem = ({todo}:TodoProps) => {
    return (
        <div>
            {todo.text}
        </div>
    );
}

export default TodoItem;