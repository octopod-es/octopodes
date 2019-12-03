import React, {Component} from  'react';
import Card from './card.jsx';
import {connect} from 'react-redux';
import * as actions from '../actions/actions'

const mapStateToProps = (state) => ({
  newCard: state.jobCards.newCard
});
const mapDispatchToProps = (dispatch) => ({
  submitInfo: dispatch(actions.submitInfoActionCreator())
});

class Column extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    return (
      <div id='column'>
        <Card newCard={this.props.newCard} submitInfo={this.props.submitInfo}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Column);