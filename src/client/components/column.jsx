import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './card.jsx';
import * as actions from '../actions/actions';
import Droppable from './dnd/Droppable'

const mapStateToProps = (state) => ({
  newCard: state.jobCards.newCard,
  interested: state.jobCards.interested,
  applied: state.jobCards.applied,
  phone: state.jobCards.phone,
  onsite: state.jobCards.onsite,
  offer: state.jobCards.offer,
  accepted: state.jobCards.accepted,
});
const mapDispatchToProps = (dispatch) => ({
  dispatchSubmitInfo: (company, role, link) => {
    return dispatch(actions.submitInfoActionCreator(company, role, link))
  },
})

class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const relevantCards = [];
    const arrayInState = this.props[this.props.id];
    for (let i = 0; i < arrayInState.length; i += 1){
      relevantCards.push(<Card jobObject={arrayInState[i]} inArray={true} key={`arrayCard${i}`}/>)
    }
    return (
      <Droppable > 
        <div id='column' style={{
          margin: '40px',
          border: '5px solid pink',
          width: '400px',
          height: '400px',
        }}>
          <h2 style={{textAlign: 'center'}}>
            {this.props.column}
          </h2>
          <Card newCard={this.props.newCard} dispatchSubmitInfo={this.props.dispatchSubmitInfo} columnID={this.props.id}/>
          { relevantCards }
        </div>
      </Droppable>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Column);
