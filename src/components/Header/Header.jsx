import React from 'react';
import styles from './Header.module.css';
import { BsSun } from 'react-icons/bs';
export default function Header({ filters, selected, onFilterChange }) {
  return (
    <header className={styles.header}>
      <div className={styles.darkmode}>
        <BsSun />
      </div>
      <ul>
        {filters.map((value, idx) => (
          <li key={idx}>
            <button
              className={`${styles.filter} ${
                selected === value && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
