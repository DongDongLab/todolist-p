import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';
export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status, id } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? 'complete' : 'active';
    onUpdate({ ...todo, status });
  };

  const handleDelete = () => onDelete(todo);
  return (
    <li className={styles.li}>
      <input
        type='checkbox'
        onChange={handleChange}
        checked={status === 'complete'}
        id={id}
        className={styles.checkbox}
      />
      <label htmlFor={id}>{text}</label>
      <button onClick={handleDelete}>
        <FaRegTrashAlt />
      </button>
    </li>
  );
}
