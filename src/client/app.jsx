import React, { Component } from 'react';
import Board from './components/board.jsx';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  // only required lifecycle method.
  render() {
    return(
      <div>
        <h1>"I'm Alive!!!!" - Tim</h1>
        <Board/>
      </div>
    )
  }
};

export default App;
