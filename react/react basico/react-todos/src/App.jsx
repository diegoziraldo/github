import React, { useState, useRef } from 'react'
import { TodoList } from './components/TodoList.jsx'

export function App() {

  const [todos, setTodos ] = useState([
    {id: 1, task:"Tarea", completed: false},
  ]);

  const todoTaskRef = useRef();


  const handleTodoAdd = ()=>{
    const task = todoTaskRef.current.value;
    if (task === '') return;

    setTodos(prevTodos)
  }


  return (
    <>
      <TodoList todos={todos}/>
      <input ref={todoTaskRef} type="text" placeholder='Nueva Tarea'/>
      <button onClick={handleTodoAdd}>Agregar</button>
      <button>Eliminar</button>
    </>
  )
}

