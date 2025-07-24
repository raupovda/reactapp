import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');

  return (
    <div className="container">
      <h1>👋 Welcome!</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name && <h2>Hello, {name}!</h2>}
    </div>
  );
}

export default App;
