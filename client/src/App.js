import './App.css';
import React from 'react';
import Board from './Board.js';

function App() {

  return (
    <div className="App">

      <header className="App-header">
        <h1>
          Play Misere Tic Tac Toe
        </h1>
        <p>
          Instructions: Force your opponent to connect three in a row either horizontally, vertically, or diagonally.
        </p>
      </header>

      <body>
        <Board />
      </body>
      
    </div>
  );
}

export default App;
