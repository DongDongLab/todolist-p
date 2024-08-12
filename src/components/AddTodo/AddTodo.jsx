import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: uuidv4(), text, status: 'active' });
    setText('');
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add your todo'
        onChange={handleChange}
        value={text}
      />
      <button>Add</button>
    </form>
  );
}
