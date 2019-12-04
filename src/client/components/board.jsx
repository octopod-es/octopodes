import React, {Component} from 'react';
import Column from './column.jsx';
import AddCardButton from './addCardButton';
import { connect } from 'react-redux';
import * as actions from '../actions/actions'

const mapDispatchToProps = (dispatch) => ({
  dispatchNewCard: () => {
    return dispatch(actions.newCardActionCreator())
  },
})

const mapStateToProps = (state) => ({
  interested: state.jobCards.interested,
  applied: state.jobCards.applied,
  phone: state.jobCards.phone,
  onsite: state.jobCards.onsite,
  offer: state.jobCards.offer,
  accepted: state.jobCards.accepted,
})

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
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
        <div>
          <AddCardButton dispatchNewCard={this.props.dispatchNewCard}/>
        </div>
        <div id='board'
          style={{
            display: 'flex',
            alignItems: 'center',
          }}>
          {displayColumn}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
