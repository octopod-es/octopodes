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
    if (this.props.newCard && this.props.columnID === 'Interested In') {
      return (
        <div id="card">
          <form
            action="Create Card"
            style={{
            // color: 'blue',
            // margin: '10px',
              width: '140px',
              height: '80px',
              border: '5px light black',
              borderStyle: 'groove',
              textAlign: 'center',

            }}

          >
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
    return null;
  }
}

export default Card;
