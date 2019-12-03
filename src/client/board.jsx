import React, { Component } from 'react';
import Column from './column.jsx';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const style = {
      backgroundColor: 'yellow',
    };
    return (
      <div style={style}>
        <Column />
      </div>
    );
  }
}

export default Board;
