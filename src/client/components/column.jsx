import React, {Component} from  'react';
import Card from './card.jsx';

class Column extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div id='column'>
        <Card/>
      </div>
    )
  }
}

export default Column;