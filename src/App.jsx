// src/App.jsx
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now(), status: 'not completed' }]);
  };

  // Function to update a todo
  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, ...updatedTodo } : todo)));
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
