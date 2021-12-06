import './App.css';
import React from 'react';
import Board from './Board.js';

function App() {

  return (
    <div className="App">

      <header className="App-header">
        <h1 className="title">
          Play Misere Tic Tac Toe
        </h1>
        <p className="instructions">
          Instructions: Force your opponent to connect three in a row either horizontally, vertically, or diagonally.
        </p>
        <Board />
      </header>
    </div>
  );
}

export default App;
