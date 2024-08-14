import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function Todolist({ selected }) {
  const [todos, setTodos] = useState(() => readTodo());
  const filtered = getFilteredItem(todos, selected);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleUpdate = (updated) => {
    setTodos((todos) =>
      todos.map((item) => (item.id === updated.id ? updated : item))
    );
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (delelted) => {
    setTodos((todos) => todos.filter((item) => item.id !== delelted.id));
  };

  return (
    <section className={styles.section}>
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

function getFilteredItem(todos, selected) {
  if (selected === 'all') {
    return todos;
  }
  return todos.filter((item) => item.status === selected);
}

function readTodo() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}
