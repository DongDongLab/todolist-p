import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
// import Header from '../Header/Header';

export default function Todolist({ selected }) {
  const [todos, setTodos] = useState([
    { id: '123', text: '장보기', status: 'active' },
    { id: '124', text: '공부하기', status: 'active' },
  ]);

  const filtered = getFilteredItem(todos, selected);
  function getFilteredItem(todos, selected) {
    if (selected === 'all') {
      return todos;
    }
    return todos.filter((item) => item.status === selected);
  }

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
        {filtered.map((item) => (
          <Todo
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            key={item.id}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
