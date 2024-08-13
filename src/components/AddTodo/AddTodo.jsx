import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';
export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), text, status: 'active' });
    setText('');
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className={styles.formWrap}>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add your todo'
          onChange={handleChange}
          value={text}
          className={styles.input}
        />
        <button className={styles.button}>Add</button>
      </form>
    </div>
  );
}
