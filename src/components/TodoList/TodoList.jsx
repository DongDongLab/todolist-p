import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function Todolist() {
  const [todos, setTodos] = useState([
    { id: '123', text: '장보기', status: 'active' },
    { id: '124', text: '공부하기', status: 'active' },
  ]);
  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleUpdate = (updated) => {
    setTodos((todos) =>
      todos.map((item) => (item.id === updated.id ? updated : item))
    );
  };

  const handleDelete = (delelted) => {
    setTodos((todos) => todos.filter((item) => item.id !== delelted.id));
  };
  return (
    <section>
      <ul>
        {todos.map((item) => (
          <Todo
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            id={item.id}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
