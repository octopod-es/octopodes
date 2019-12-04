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
  dispatchDeleteCard: (link) => {
    return dispatch(actions.deleteCardActionCreator(link))
  },
  populateDom: (array) => (dispatch(actions.populateDomActionCreator(array))),
})

class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // componentWillUpdate() {
  //   fetch('/data')
  //   .then((data) => {
  //     return data.json();
  //   })
  //   .then((parsedBlob) => {
  //     return this.props.populateDom(parsedBlob);
  //   })
  // }

  render() {
    const relevantCards = [];
    const arrayInState = this.props[this.props.id];
    for (let i = 0; i < arrayInState.length; i += 1){
      relevantCards.push(<Card jobObject={arrayInState[i]} inArray={true} dispatchDeleteCard={this.props.dispatchDeleteCard} dispatchPopulateDom={this.props.populateDom} key={`arrayCard${i}`}/>)
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
