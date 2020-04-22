import React from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer'
import TodoInput from './components/TodoInput'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoContainer />
        <TodoInput />
      </header>
    </div>
  );
}

export default App;
