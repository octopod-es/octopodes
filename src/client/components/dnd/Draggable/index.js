import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Draggable extends Component {
  constructor(props) {
    super(props)
  }
  
  drag(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    console.log('index.js', e.target.id)
  }

  noAllowDrop(e) {
    e.stopPropagation();
  }
  
  render() {
    return(
      <div id={this.props.id} draggable="true" onDragStart={this.drag} onDragOver={this.noAllowDrop} style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}

Draggable.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
}

export default Draggable;
