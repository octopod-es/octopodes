import React, {Component} from 'react';

const AddCardButton = (props) => {
    return (
        <button 
        type = 'submit' 
        onClick = {() => {
            console.log(props.hello);
            return (props.dispatchNewCard())}}
         > + </button>
    )
}

export default AddCardButton;