import React, { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import { DarkModeProvider } from './context/DarkModeContext';
const filters = ['all', 'active', 'complete'];
export default function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header filters={filters} selected={filter} onFilterChange={setFilter} />
      <TodoList selected={filter} />
    </DarkModeProvider>
  );
}
