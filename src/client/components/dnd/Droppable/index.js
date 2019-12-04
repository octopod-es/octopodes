import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Droppable extends Component {
  
  drop(e) {
    e.preventDefault();
    const transfer = e.dataTransfer.getData('transfer');
    console.log('transfer ', transfer);
    // e.target.appendChild(document.getElementById(transfer));
    
    const node = document.createElement('div');
    node.innerHTML = transfer;
    e.target.appendChild(node);
    console.log('node ', node);
  }

  allowDrop(e) {
    e.preventDefault();
  }
  
  render() {
    return(
      <div id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop} style={this.props.style}>
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
