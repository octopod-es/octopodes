import React, { Component } from 'react';
import { connect } from 'react-redux';
import Column from './column.jsx';
import AddCardButton from './addCardButton';
import * as actions from '../actions/actions';

const mapDispatchToProps = (dispatch) => ({
  dispatchNewCard: () => dispatch(actions.newCardActionCreator()),
});

const mapStateToProps = (state) => ({
  columns: state.jobCards.columns,
});

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const columnHeaders = ['Interested In', 'Applied', 'Phone screen', 'Onsite', 'Offer', 'Accepted'];
    const displayColumn = [];
    for (let i = 0; i < columnHeaders.length; i += 1) {
      displayColumn.push(<Column id={`${columnHeaders[i]}`} key={`${columnHeaders[i]}`} />);
    }
    return (
      <div>
        <div>
          <AddCardButton hello="world" dispatchNewCard={this.props.dispatchNewCard} />
        </div>
        <div
          id="board"
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {displayColumn}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
