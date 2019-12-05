import React, { Component } from 'react';
import { connect } from 'react-redux';
import Column from './column.jsx';
import AddCardButton from './addCardButton';
import * as actions from '../actions/actions';

const mapDispatchToProps = (dispatch) => ({
  dispatchNewCard: () => dispatch(actions.newCardActionCreator()),
});

const mapStateToProps = (state) => ({
  interested: state.jobCards.interested,
  applied: state.jobCards.applied,
  phone: state.jobCards.phone,
  onsite: state.jobCards.onsite,
  offer: state.jobCards.offer,
  accepted: state.jobCards.accepted,
});

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const columnHeaders = ['Interested', 'Applied', 'Phone Screen', 'Onsite', 'Offer', 'Accepted'];
    const stateProperties = ['interested', 'applied', 'phone', 'onsite', 'offer', 'accepted'];
    const displayColumn = [];
    for (let i = 0; i < columnHeaders.length; i += 1) {
      displayColumn.push(<Column id={`${stateProperties[i]}`} column={`${columnHeaders[i]}`} key={`${columnHeaders[i]}`} />);
    }
    return (
      <div>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', justifyItems: 'center', marginTop: '50px',
        }}
        >
          <AddCardButton dispatchNewCard={this.props.dispatchNewCard} />
        </div>
        <div
          id="board"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
            alignItems: 'start',
            justifyItems: 'center',
            paddingBottom: '10px',
          }}
        >
          {displayColumn}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
