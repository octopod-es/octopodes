import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './card.jsx';
import * as actions from '../actions/actions';
import Droppable from './dnd/Droppable';

const mapStateToProps = (state) => ({
  newCard: state.jobCards.newCard,
  interested: state.jobCards.interested,
  applied: state.jobCards.applied,
  phone: state.jobCards.phone,
  onsite: state.jobCards.onsite,
  offer: state.jobCards.offer,
  accepted: state.jobCards.accepted,
});

//GIVE CARD ABILITY TO SUBMIT ITSELF
const mapDispatchToProps = (dispatch) => ({
  dispatchSubmitInfo: (company, role, link) => dispatch(actions.submitInfoActionCreator(company, role, link)),
});

class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const relevantCards = [];
    //ID IS COLUMN NAME, COLUMN NAME WITHIN PROPS IS ASSOCIATED WITH THE ARRAY OF CARD OBJECTS
    const arrayInState = this.props[this.props.id];
    //ARRAYINSTATE = ARRAY OF CARDS
    for (let i = 0; i < arrayInState.length; i += 1) {
      relevantCards.push(<Card jobObject={arrayInState[i]} inArray key={`arrayCard${i}`} />);
    }
    return (
      <Droppable>
        <div
          id="column"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // justifyContent: 'center',
            margin: '10px',
            border: '5px solid #802864',
            width: '200px',
            minHeight: '400px',
            paddingBottom: '15px',
            borderRadius: '5px',
          }}
        >
          <h2 style={{ textAlign: 'center' }}>
            {this.props.column}
          </h2>
          <Card newCard={this.props.newCard} dispatchSubmitInfo={this.props.dispatchSubmitInfo} columnID={this.props.id} />
          <div style={{ }}>
            { relevantCards }
          </div>

        </div>
      </Droppable>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Column);
