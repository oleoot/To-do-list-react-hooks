import React, { useState } from 'react';
import './App.css'

function Todo({ todo, index, completeTodo, deleteTodo }) {
  return (
    <div style={{ textDecoration: todo.isComleted ? 'line-through' : '' }} className="todo">
      {todo.text}
      <div className="todo-wrap">
        <div>
          <button onClick={() => { completeTodo(index) }}>Complete</button>
        </div>
        <div>
          <button onClick={() => { deleteTodo(index) }}>X</button>
        </div>
      </div>
    </div>
  )
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} placeholder={"Add todo..."} onChange={(e) => { setValue(e.target.value) }} />
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about react',
      isComleted: false
    },
    {
      text: 'Meet friend for lunch',
      isComleted: false
    },
    {
      text: 'Build really cool todo app',
      isComleted: false
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos)
  }


  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isComleted = true;
    setTodos(newTodos)
  }

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}


export default App;
