import React, {Component} from  'react';
import Card from './card.jsx';
import {connect} from 'react-redux';
import * as actions from '../actions/actions'

const mapStateToProps = (state) => ({
  newCard: state.jobCards.newCard,
  interested: state.jobCards.interested,
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
    const relevantCards = [];
    for (let i = 0; i < this.props.id.length; i += 1){
      relevantCards.push(<Component />)
    }
    return (
      <div id='column'>
        <Card newCard={this.props.newCard} submitInfo={this.props.submitInfo}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Column);