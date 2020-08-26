import React, {useState} from 'react';

interface TodoForm {
   addTodo:(newTodo:string) => void
}

const TodoForm:React.FC<TodoForm> = ({addTodo}) => {

    const [newTodo, setNewTodo] = useState("")

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(newTodo.trim()) {
            addTodo(newTodo)
            setNewTodo("")
        }

    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center my-2">
            <input onChange={handleInputChange} value={newTodo} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            <button type="submit" className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add</button>
        </form>
    );
};

export default TodoForm;
