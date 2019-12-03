import React, { Component } from 'react';
import Card from './card.jsx';


// /Users/tim/Codesmith/ScratchProject/octopodes/src/app.css


class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div
        style={{
          margin: '40px',
          border: '5px solid pink',
          width: '200px',
          height: '200px',

        }}
      >
        <h2>{this.props.id}</h2>
        <Card />
      </div>
    );
  }
}

export default Column;
