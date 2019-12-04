import React, { Component } from 'react';

const AddCardButton = (props) => (
  <button
    style={{
      fontWeight: 'bold', fontSize: '16px', width: '50px', borderRadius: '4px', backgroundColor: '#FBC638', color: '',
    }}
    type="submit"
    onClick={() => (props.dispatchNewCard())}
  >
    {' '}
+
    {' '}

  </button>
);

export default AddCardButton;
