import React, {Component} from 'react';
import { submitInfoActionCreator } from '../actions/actions';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const style = {
      backgroundColor: 'blue'
    }
    if(this.props.newCard && this.props.columnID === 'interested'){
      return (
        <div id="card">
          <form
            action="Create Card"
            style={{
            // color: 'blue',
            // margin: '10px',
              width: '140px',
              height: '80px',
              border: '5px light black',
              borderStyle: 'groove',
              textAlign: 'center',
            }}>
            <input id="company" type="text" placeholder="Company" />
            <br />
            <input id="role" type="text" placeholder="Role" />
            <br />
            <input id="link" type="text" placeholder="Link" />
            <br />
            <button type="button" onClick={() => {
              return this.props.dispatchSubmitInfo(document.getElementById('company').value, document.getElementById('role').value, document.getElementById('link').value);
              }}>Add Info</button>
          </form>
        </div>
      );
    }
    else if (this.props.inArray){
      return (
        <div style={{
          // color: 'blue',
          // margin: '10px',
            width: '140px',
            height: '80px',
            border: '5px light black',
            borderStyle: 'groove',
            textAlign: 'center',
          }} 
          className="hard card">
          <label>Company: </label><span>{this.props.jobObject.company}</span>
          <br/>
          <label>Role: </label><span>{this.props.jobObject.role}</span>
          <br/>
          <label>Link: </label><span><a href={`https://${this.props.jobObject.link}`} target='_blank'>{this.props.jobObject.link}</a></span>
        </div>
      );
    }
    else {
     return null;
    }
  }
}

export default Card;
