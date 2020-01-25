import React, { Component } from 'react';
import Column from './column.jsx';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="app">
        <Column />
      </div>
    );
  }
}

export default Board;
