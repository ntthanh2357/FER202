import React from 'react';
import './App.css';
import { Ex1 } from './ex1';
import Ex2 from './ex2';

const showEx = 2; // 1: Ex1, 2: Ex2

function App() {
  return (
    <div className="App">
      {showEx === 1 && <Ex1 />}
      {showEx === 2 && <Ex2 />}
    </div>
  );
}

export default App;
