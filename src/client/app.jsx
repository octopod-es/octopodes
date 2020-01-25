import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Board from './components/board';
import * as actions from './actions/actions';

const mapDispatchToProps = (dispatch) => ({
  populateDom: (array) => dispatch(actions.populateDomActionCreator(array)),
});

const App = (props) => {
  useEffect(() => {
    fetch('/data')
      .then((data) => data.json())
      .then((parsedBlob) => {
        props.populateDom(parsedBlob);
      })
      .catch((err) => console.log('Data fetch failed! Check yo self!', err));
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <div id="board">
        <div id="header">
          <img id="headerLogo" src="https://files.slack.com/files-pri/TMSRC4ZKL-FR98E54UC/image.png" alt="logo" />
          <h2 id="headerOct">
          Octopodes
            <span id="headerText"> scrum board for your interview tracking</span>
          </h2>
        </div>
        <hr id="headerHr" />
        <span id="authors">Chris Romano || Jamie Highsmith || Sejan Miah || Tim Pagra || Ben Mizel</span>
        <Board />
      </div>
    </DndProvider>
  );
};

export default connect(null, mapDispatchToProps)(App);
