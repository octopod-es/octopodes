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
  columns: state.jobCards.columns,
})

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div id='board'>
        <Column />
        <AddCardButton hello='world' dispatchNewCard={this.props.dispatchNewCard}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)