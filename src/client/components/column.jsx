import React from 'react';
import { connect } from 'react-redux';
import { useDrop } from 'react-dnd';
import Card from './card';
import * as actions from '../actions/actions';


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
  dispatchSubmitInfo: (company, role, link) => dispatch(actions.submitInfoActionCreator(company, role, link)),
});


const Column = (props) => {
  const {
    columnName, newCard, dispatchSubmitInfo, id,
  } = props;
  const relevantCards = [];
  const arrayInState = props[id];
  for (let i = 0; i < arrayInState.length; i += 1) {
    relevantCards.push(<Card jobObject={arrayInState[i]} inArray key={`arrayCard${i}`} />);
  }
  const [collectedProps, drop] = useDrop({
    accept: 'card',
  });
  console.log(drop);
  return (
    <div className="column" ref={drop}>
      <h2>
        {columnName}
      </h2>
      <hr id="columnHr" />
      <Card newCard={newCard} dispatchSubmitInfo={dispatchSubmitInfo} columnName={id} />
      { relevantCards }
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Column);
