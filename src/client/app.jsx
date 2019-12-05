import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from './components/board.jsx';
import * as actions from './actions/actions';
// import io from 'socket.io-client'

const mapDispatchToProps = (dispatch) => ({
  populateDom: (array) => (dispatch(actions.populateDomActionCreator(array))),
});
const mapStateToProps = (state) => ({});

class App extends Component {
  constructor(props) {
    super(props);
    // this.emit = this.emit.bind(this);
    // this.socket = io.connect('localhost:3000')
  }

  componentDidMount() {
    fetch('/data')
      .then((data) => data.json())
      .then((parsedBlob) => this.props.populateDom(parsedBlob));
  }

  componentDidUpdate() {
    // this.emit()
  }
  componentWillUnmount(){
  // this.socket.close();
 }
//  emit() {
//     // const socket = io();
//     // console.log("FORM", document.querySelector('#form').innerHTML);
//     console.log("INSIDE EMIT FUNCTION")
//     console.log("THE MESSAGE IS", document.querySelector('#m').value);
//     // socket.emit('chat message', document.querySelector('#m').value);
//       // e.preventDefault(); // prevents page reloading
//       document.querySelector('#m').val('');
//   } ;

  

  render() {
    const chatStyle = {
      'border': '1px solid purple',
      'width': '25%',
      'boxSizing': 'border-box',
      'position': 'fixed', 'bottom': 0, 'right': 0,
      // 'form': { background: '#000', padding: '3px', position: 'fixed', bottom: 0, width: '100%' },
      // 'form input': { border: 0, padding: '10px', width: '90%', marginRight: '.5%' },
      // 'form button' : { width: '9%', background: 'rgb(130, 224, 255)', border: 'none', padding: '10px' },
      // '#messages': { listStyleType: 'none', margin: 0, padding: 0 },
      // '#messages li': { padding: '5px 10px' },
      // '#messages li:nth-child(odd)': { background: '#eee' }
    }

    // const formStyle = {
    //   background: '#000', padding: '3px', 
    // }

    return (
      <div id="board" style={{ fontFamily: 'Nunito' }}>
        <div style={{
          display: 'flex', alignItems: 'center',
        }}
        >
          <img src="https://files.slack.com/files-pri/TMSRC4ZKL-FR98E54UC/image.png" alt="logo" style={{ height: '50px' }} />
          <h2 style={{ margin: '0px 0px 0px 20px', fontSize: '34px' }}>
            xCSQ
            <span style={{ marginLeft: '10px', fontSize: '20px' }}> scrum board for your interviews process</span>
          </h2>
        </div>
        <hr style={{ marginTop: '10px', width: '500px', marginInlineStart: '85px' }} />
        <Board />  


      {/* <div id="chatbox" style={chatStyle}>
         <ul id="messages">
         </ul>
        <form id="form">
      <input style={{padding: '10px', width: '80%', margin: '.5%'}} id="m" autoComplete="off" />
      <button style={{ width: '12%', background: 'rgb(130, 224, 255)', border: 'none', padding: '10px' }} 
      onClick={this.emit}>Send</button>
      </form>

      </div> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
