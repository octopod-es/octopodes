import React, { Component } from 'react';
import Board from './components/board.jsx';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id="board">
        <h1>Octopodes</h1>
        <h3>Scrum board for your interview tracking</h3>
        <Board />
      </div>
    );
  }
}

export default App;
