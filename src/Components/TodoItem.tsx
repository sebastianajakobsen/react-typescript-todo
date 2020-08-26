import React from 'react';

interface TodoItem {
    todo:Todo,
    toggleTodo:(id: number) => void,
    removeTodo:(id: number) => void
}

const TodoItem:React.FC<TodoItem> = ({todo, toggleTodo, removeTodo}) => {

    const handleCheckbox = () => {
        toggleTodo(todo.id)
    }

    const handleButtonClick = () => {
        removeTodo(todo.id)
    }

    return (
        <div className="flex items-center">
            <input onChange={handleCheckbox} checked={todo.completed} type="checkbox"/>
            <p className="mx-2" style={{
                textDecoration:todo.completed ? 'line-through' : "none"
            }}>{todo.text}</p>
            <button onClick={handleButtonClick} className="font-bold text-red-600">x</button>
        </div>
    );
};

export default TodoItem;
