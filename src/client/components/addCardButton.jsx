import React from 'react';

const AddCardButton = (props) => (
  <button id="addCardButton" type="submit" onClick={() => (props.dispatchNewCard())}> + </button>
);

export default AddCardButton;
