import React from 'react';

interface ITodoItem {
    todo:ITodo
}

const TodoItem:React.FC<ITodoItem> = ({todo}) => {
    return (
        <div>
            {todo.task}
        </div>
    );
};

export default TodoItem;
