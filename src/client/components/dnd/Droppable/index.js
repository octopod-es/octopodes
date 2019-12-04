import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Droppable extends Component {
  constructor(props) {
    super(props)
  }
  
  drop(e) {
    e.preventDefault();
    // // ! this line is the issue:
    // READ THIS: https://stackoverflow.com/questions/11927309/html5-dnd-datatransfer-setdata-or-getdata-not-working-in-every-browser-except-fi
    const transfer = e.dataTransfer.getData('transfer');
    console.log('transfer ', transfer);
    const node = document.createElement('div');
    // node.innerHTML = "you have no access to the data that you set, not even in read only mode! Go f@&# yourself.";
    node.innerHTML = "you have no access to the data that you set, not even in read only mode! Go f@&# yourself.";
    e.target.appendChild(node);
    console.log('node ', node);

    // const data = e.dataTransfer.getData("text");
    // console.log('data in Droppable ',data)
    // e.target.appendChild(document.getElementById(data));
    // e.dataTransfer.clearData();
  }

  allowDrop(e) {
    e.preventDefault();
  }
  
  render() {
    return(
      <div id={this.props} onDrop={this.drop} onDragOver={this.allowDrop} style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}

Droppable.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
}

export default Droppable;
