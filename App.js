import React from 'react';
import './App.css'; // Ensure you have the necessary styles imported
import Register from './components/Register';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title">Expense Tracker</h1>
        <Register />
      </header>
    </div>
  );
};

export default App;
