// src/App.js
import React from 'react';
import './App.css';
import Chatbot from './Chatbot';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ברוכים הבאים לדוגמת הצ'אטבוט של React</h1>
      </header>
      <Chatbot />
    </div>
  );
}

export default App;