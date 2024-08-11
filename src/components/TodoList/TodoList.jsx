import React, { useState } from 'react';

export default function Todolist() {
  const [todos, setTodos] = useState([
    { id: '123', text: '장보기', status: 'active' },
    { id: '124', text: '공부하기', status: 'active' },
  ]);
  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id} status={item.status}>
            {item.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
