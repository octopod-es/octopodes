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
    // const divStyle = {
    //   border: 'black',
    //   borderWidth: '5px',
    //   borderColor: 'black',
    //   backgroundColor: 'yellow',
    // };
    //     <div
    //   style={
    //     {
    //      border: '2px solid red'
    //     }
    //   }
    // >

    // const divStyle = {
    //   margin: '40px',
    //   border: '5px',
    // };
    // const pStyle = {
    //   fontSize: '15px',
    //   textAlign: 'center',
    // };

    // const headerColor = {
    //   color: 'green',
    // };


    return (
      <div
        id="column"
        style={{
          margin: '40px',
          border: '5px solid pink',

        }}
      >
        <h3>Interested Jobs</h3>
        <Card />
      </div>
    );
  }
}

export default Column;
