import React, {Component} from 'react';

const AddCardButton = (props) => {
    return (
        <button 
        type = 'submit' 
        onClick = {() => {
            return (props.dispatchNewCard())}}
         > + </button>
    )
}

export default AddCardButton;