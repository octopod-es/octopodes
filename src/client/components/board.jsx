import React, { Component } from 'react';
import Column from './column.jsx';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const columnHeaders = ['Interested In', 'Applied', 'Phone screen', 'Onsite', 'Offer', 'Accepted'];
    const displayColumn = [];
    for (let i = 0; i < columnHeaders.length; i += 1) {
      displayColumn.push(<Column id={`${columnHeaders[i]}`} key={`${columnHeaders[i]}`} />);
    }
    return (
      <div
        id="board"
      >
        {displayColumn}
      </div>
    );
  }
}

export default Board;
