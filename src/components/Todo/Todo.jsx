import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status, id } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? 'complete' : 'active';
    onUpdate({ ...todo, status });
  };

  const handleDelete = () => onDelete(todo);
  return (
    <li>
      <input
        type='checkbox'
        onChange={handleChange}
        checked={status === 'complete'}
        id={id}
      />
      <label htmlFor={id}>{text}</label>
      <button onClick={handleDelete}>
        <FaRegTrashAlt />
      </button>
    </li>
  );
}
