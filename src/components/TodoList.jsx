// src/components/TodoList.jsx
import React, { useState } from 'react';

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  const [editing, setEditing] = useState(null);
  const [newTask, setNewTask] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newStatus, setNewStatus] = useState('');

  const handleEdit = (todo) => {
    setEditing(todo.id);
    setNewTask(todo.task);
    setNewDescription(todo.description);
    setNewStatus(todo.status);
  };

  const handleUpdate = (id) => {
    updateTodo(id, { task: newTask, description: newDescription, status: newStatus });
    setEditing(null);
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="todo-card">
          {editing === todo.id ? (
            <>
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <input
                type="text"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
              <select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
              >
                <option value="not completed">Not Completed</option>
                <option value="completed">Completed</option>
              </select>
              <button onClick={() => handleUpdate(todo.id)}>Update</button>
            </>
          ) : (
            <>
              <h3>{todo.task}</h3>
              <p>{todo.description}</p>
              <p>Status: {todo.status}</p>
              <button onClick={() => handleEdit(todo)}>Edit</button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
