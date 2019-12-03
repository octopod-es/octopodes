import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const style = {
      backgroundColor: 'blue',
    };
    return (
      <div id="card">
        <form action="Create Card">
          <input type="text" placeholder="Company" />
          <br />
          <input type="text" placeholder="Role" />
          <br />
          <input type="text" placeholder="Link" />
          <br />
          <button type="button">Add Info</button>
        </form>
      </div>
    );
  }
}

export default Card;
