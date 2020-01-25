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

const Board = (props) => {
  const { dispatchNewCard } = props;
  const columnHeaders = ['Interested', 'Applied', 'Phone Screen', 'Onsite', 'Offer', 'Accepted'];
  const stateProperties = ['interested', 'applied', 'phone', 'onsite', 'offer', 'accepted'];
  const displayColumn = [];
  for (let i = 0; i < columnHeaders.length; i += 1) {
    displayColumn.push(<Column id={`${stateProperties[i]}`} columnName={`${columnHeaders[i]}`} key={`${columnHeaders[i]}`} />);
  }
  return (
    <div id="board">
      <div id="addCardButtonGrid">
        <AddCardButton dispatchNewCard={dispatchNewCard} />
      </div>
      <div id="columnsGrid">
        {displayColumn}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
