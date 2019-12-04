import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from './components/board.jsx';
import * as actions from './actions/actions';

const mapDispatchToProps = (dispatch) => ({
  populateDom: (array) => (dispatch(actions.populateDomActionCreator(array))),
});
const mapStateToProps = (state) => ({});

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('/data')
      .then((data) => data.json())
      .then((parsedBlob) => this.props.populateDom(parsedBlob));
  }

  render() {
    return (
      <div id="board" style={{ fontFamily: 'Nunito' }}>
        <div style={{
          display: 'flex', alignItems: 'center',
        }}
        >
          <img src="https://files.slack.com/files-pri/TMSRC4ZKL-FR98E54UC/image.png" alt="logo" style={{ height: '50px' }} />
          <h2 style={{ margin: '0px 0px 0px 20px', fontSize: '34px' }}>
            Octopodes
            <span style={{ marginLeft: '10px', fontSize: '20px' }}> scrum board for your interview tracking</span>
          </h2>
        </div>
        <hr style={{ marginTop: '10px', width: '500px', marginInlineStart: '85px' }} />
        <Board />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
