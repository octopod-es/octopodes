import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './card.jsx';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => ({
  newCard: state.jobCards.newCard,
  interested: state.jobCards.interested,
});
const mapDispatchToProps = (dispatch) => ({
  submitInfo: dispatch(actions.submitInfoActionCreator()),
});

class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    // const relevantCards = [];
    // for (let i = 0; i < this.props.id.length; i += 1){
    //   relevantCards.push(<Component />)
    // }
    return (
      <div
        id="column"
        style={{
          margin: '40px',
          border: '5px solid pink',
          width: '400px',
          height: '400px',
        }}
      >
        <h2 style={{
          textAlign: 'center',
        }}
        >
          {this.props.id}

        </h2>
        <Card newCard={this.props.newCard} submitInfo={this.props.submitInfo} columnID={this.props.id} />
        {/* { relevantCards } */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Column);
