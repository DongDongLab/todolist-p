import React from 'react';
import styles from './Header.module.css';
import { BsSun } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import { useDarkMode } from '../../context/DarkModeContext';
export default function Header({ filters, selected, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      <button className={styles.darkmode} onClick={() => toggleDarkMode()}>
        {darkMode === false ? <FaMoon /> : <BsSun />}
      </button>
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
