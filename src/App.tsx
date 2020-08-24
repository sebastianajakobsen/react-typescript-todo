import React, {useState} from 'react';
import {TodoList} from "./Components/TodoList";

export const App = () => {

  const [todos, setTodos] = useState([
    {
      id:1,
      text:"hello world 1",
      completed:false
    },
    {
      id:2,
      text:"hello world 2",
      completed:false
    },
    {
      id:3,
      text:"hello world 3",
      completed:true
    },
  ])

  return (
    <div>
      <TodoList todos={todos}/>
    </div>
  );
}


