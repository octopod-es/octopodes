import React, { Component } from 'react';
import Board from './components/board.jsx';
import * as actions from '../client/actions/actions'
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  populateDom: (array) => (dispatch(actions.populateDomActionCreator(array))),
});
const mapStateToProps = (state) => ({});

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('props obj in app: ',this.props)
    fetch('/data')
      .then((data) => {
        return data.json();
      })
      .then((parsedBlob) => {
        return this.props.populateDom(parsedBlob);
      })
  }

  render() {
    return (
      <div id="board">
        <h1>Octopodes</h1>
        <h3>Scrum board for your interview tracking</h3>
        <Board />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
